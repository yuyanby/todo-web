// 应用逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 初始化
    initApp();
    
    // 绑定事件
    bindEvents();
});

// 当前筛选状态
let currentFilter = 'all';
let currentPriorityFilter = 'all';

function initApp() {
    updateStats();
    renderTaskList();
}

function updateStats() {
    const stats = getTaskStats();
    
    // 更新统计卡片
    document.getElementById('stat-total').textContent = stats.total;
    document.getElementById('stat-high').textContent = stats.high;
    document.getElementById('stat-due').textContent = stats.dueSoon;
    document.getElementById('stat-hermes').textContent = stats.hermes;
    
    // 更新侧边栏徽章
    document.getElementById('count-all').textContent = stats.total;
    document.getElementById('count-pending').textContent = stats.pending;
    document.getElementById('count-completed').textContent = stats.completed;
    document.getElementById('count-wedding').textContent = stats.wedding;
    document.getElementById('count-newhome').textContent = stats.newhome;
    document.getElementById('count-hermes').textContent = stats.hermes;
    document.getElementById('count-user').textContent = stats.user;
}

function renderTaskList() {
    const taskList = document.getElementById('task-list');
    let filteredTasks = tasksData.tasks;
    
    // 应用筛选
    if (currentFilter === 'pending') {
        filteredTasks = filteredTasks.filter(t => t.status === 'pending');
    } else if (currentFilter === 'completed') {
        filteredTasks = filteredTasks.filter(t => t.status === 'completed');
    } else if (currentFilter === 'wedding') {
        filteredTasks = filteredTasks.filter(t => t.category === '婚礼');
    } else if (currentFilter === 'newhome') {
        filteredTasks = filteredTasks.filter(t => t.category === '新房');
    } else if (currentFilter === 'hermes') {
        filteredTasks = filteredTasks.filter(t => t.owner === 'hermes');
    } else if (currentFilter === 'user') {
        filteredTasks = filteredTasks.filter(t => t.owner === 'user');
    }
    
    // 优先级筛选
    if (currentPriorityFilter !== 'all') {
        filteredTasks = filteredTasks.filter(t => t.priority === currentPriorityFilter);
    }
    
    // 排序：未完成优先，然后按优先级，然后按截止日期
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    filteredTasks.sort((a, b) => {
        if (a.status !== b.status) return a.status === 'completed' ? 1 : -1;
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        return new Date(a.due_date || '9999-12-31') - new Date(b.due_date || '9999-12-31');
    });
    
    // 渲染
    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-clipboard-list"></i>
                <h3>暂无任务</h3>
                <p>点击右上角"添加任务"开始创建</p>
            </div>
        `;
        return;
    }
    
    taskList.innerHTML = filteredTasks.map(task => renderTaskItem(task)).join('');
    
    // 绑定任务项事件
    document.querySelectorAll('.task-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // 如果点击的是按钮，不触发任务项点击
            if (e.target.closest('.btn') || e.target.closest('.task-checkbox')) {
                return;
            }
            const taskId = this.dataset.id;
            if (taskId) {
                window.location.href = `task.html?id=${taskId}`;
            }
        });
    });
}

function renderTaskItem(task) {
    const isCompleted = task.status === 'completed';
    const ownerEmoji = task.owner === 'hermes' ? '🤖' : '👤';
    const ownerText = task.owner === 'hermes' ? 'Hermes' : '我';
    
    // 计算剩余天数
    let dueText = '';
    let dueClass = '';
    if (task.due_date && !isCompleted) {
        const due = new Date(task.due_date);
        const today = new Date();
        const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
        
        if (diff < 0) {
            dueText = `逾期 ${Math.abs(diff)} 天`;
            dueClass = 'text-danger';
        } else if (diff === 0) {
            dueText = '今天截止';
            dueClass = 'text-danger';
        } else if (diff <= 3) {
            dueText = `剩 ${diff} 天`;
            dueClass = 'text-warning';
        } else {
            dueText = task.due_date;
        }
    } else if (task.due_date) {
        dueText = task.due_date;
    }
    
    return `
        <div class="task-item ${task.priority}" data-id="${task.id}">
            <div class="task-checkbox ${isCompleted ? 'checked' : ''}" onclick="toggleTask(${task.id})">
                ${isCompleted ? '<i class="fas fa-check"></i>' : ''}
            </div>
            <div class="task-content">
                <div class="task-title ${isCompleted ? 'completed' : ''}">${task.content}</div>
                <div class="task-meta">
                    <span><i class="far fa-calendar"></i> ${dueText}</span>
                    <span><i class="far fa-folder"></i> ${task.category}</span>
                    <span>${ownerEmoji} ${ownerText}</span>
                </div>
            </div>
            <div class="task-badges">
                <span class="badge badge-category">${task.category}</span>
                <span class="badge badge-owner-${task.owner}">${ownerText}</span>
                ${task.output_file ? '<span class="badge badge-guide">📄 攻略</span>' : ''}
            </div>
            <div class="task-actions">
                <a href="task.html?id=${task.id}" class="btn btn-primary"><i class="fas fa-book-open"></i> 查看攻略</a>
                <button class="btn btn-success" onclick="toggleTask(${task.id})"><i class="fas ${isCompleted ? 'fa-undo' : 'fa-check'}"></i> ${isCompleted ? '取消' : '完成'}</button>
            </div>
        </div>
    `;
}

function bindEvents() {
    // 导航筛选
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderTaskList();
        });
    });
    
    // 优先级筛选
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentPriorityFilter = this.dataset.priority;
            renderTaskList();
        });
    });
    
    // 添加任务弹窗
    const addModal = document.getElementById('add-modal');
    const addBtn = document.getElementById('add-task-btn');
    const closeBtn = document.getElementById('close-modal');
    const cancelBtn = document.getElementById('cancel-add');
    
    addBtn.addEventListener('click', () => {
        addModal.classList.add('active');
    });
    
    closeBtn.addEventListener('click', () => {
        addModal.classList.remove('active');
    });
    
    cancelBtn.addEventListener('click', () => {
        addModal.classList.remove('active');
    });
    
    addModal.addEventListener('click', (e) => {
        if (e.target === addModal) {
            addModal.classList.remove('active');
        }
    });
    
    // 表单提交
    document.getElementById('add-task-form').addEventListener('submit', function(e) {
        e.preventDefault();
        addTask();
    });
    
    // 搜索
    document.getElementById('search-input').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (!query) {
            renderTaskList();
            return;
        }
        
        const taskList = document.getElementById('task-list');
        const filtered = tasksData.tasks.filter(t => 
            t.content.toLowerCase().includes(query) ||
            t.category.toLowerCase().includes(query)
        );
        
        if (filtered.length === 0) {
            taskList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h3>未找到匹配的任务</h3>
                </div>
            `;
        } else {
            taskList.innerHTML = filtered.map(task => renderTaskItem(task)).join('');
        }
    });
}

function toggleTask(taskId) {
    const task = tasksData.tasks.find(t => t.id === taskId);
    if (task) {
        task.status = task.status === 'completed' ? 'pending' : 'completed';
        task.completed_at = task.status === 'completed' ? new Date().toISOString() : null;
        updateStats();
        renderTaskList();
    }
}

function addTask() {
    const content = document.getElementById('task-content').value;
    const category = document.getElementById('task-category').value;
    const priority = document.getElementById('task-priority').value;
    const dueDate = document.getElementById('task-due').value;
    const owner = document.getElementById('task-owner').value;
    
    const newTask = {
        id: tasksData.tasks.length + 3, // 从3开始
        content: content,
        status: 'pending',
        priority: priority,
        category: category,
        owner: owner,
        due_date: dueDate,
        output_file: null,
        created_at: new Date().toISOString()
    };
    
    tasksData.tasks.push(newTask);
    
    // 关闭弹窗并重置表单
    document.getElementById('add-modal').classList.remove('active');
    document.getElementById('add-task-form').reset();
    
    // 更新界面
    updateStats();
    renderTaskList();
    
    // 提示
    alert('任务已添加！');
}

// 工具函数
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN');
}

function getDaysUntil(dateString) {
    if (!dateString) return null;
    const due = new Date(dateString);
    const today = new Date();
    const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
    return diff;
}
