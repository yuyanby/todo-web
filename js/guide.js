// 攻略数据 - 按任务ID存储
// 每个任务包含搜索研究成果
const guideData = {};

// 加载指定任务的攻略数据
async function loadGuide(taskId) {
    try {
        const response = await fetch(`guides/task_${taskId}.json?v=${Date.now()}`);
        if (response.ok) {
            const data = await response.json();
            guideData[taskId] = data;
            return data;
        }
    } catch (e) {
        // 攻略数据不存在，静默处理
    }
    return null;
}

// 填充攻略内容到页面
function fillGuideContent(taskId, data) {
    if (!data) return;
    
    // 小红书
    if (data.xiaohongshu) {
        document.getElementById('xhs-keywords').textContent = data.xiaohongshu.keywords || '暂无';
        if (data.xiaohongshu.summary) {
            document.getElementById('xhs-summary').innerHTML = data.xiaohongshu.summary;
        }
        if (data.xiaohongshu.images && data.xiaohongshu.images.length > 0) {
            var gallery = document.getElementById('xhs-gallery');
            gallery.innerHTML = data.xiaohongshu.images.map(function(img) {
                return '<div class="gallery-item" onclick="openImageModal(this)"><img src="' + img.url + '" alt="' + img.alt + '" onerror="this.src=\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%23f0f0f0%22 width=%22200%22 height=%22200%22/><text fill=%22%23999%22 x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22>暂无图片</text></svg>\'"><div class="caption">' + img.alt + '</div></div>';
            }).join('');
        }
    }
    
    // 知乎
    if (data.zhihu) {
        document.getElementById('zhihu-keywords').textContent = data.zhihu.keywords || '暂无';
        if (data.zhihu.summary) {
            document.getElementById('zhihu-summary').innerHTML = data.zhihu.summary;
        }
        if (data.zhihu.images && data.zhihu.images.length > 0) {
            var gallery = document.getElementById('zhihu-gallery');
            gallery.innerHTML = data.zhihu.images.map(function(img) {
                return '<div class="gallery-item" onclick="openImageModal(this)"><img src="' + img.url + '" alt="' + img.alt + '"><div class="caption">' + img.alt + '</div></div>';
            }).join('');
        }
    }
    
    // B站
    if (data.bilibili) {
        document.getElementById('bilibili-keywords').textContent = data.bilibili.keywords || '暂无';
        if (data.bilibili.videos) {
            document.getElementById('bilibili-videos').innerHTML = data.bilibili.videos;
        }
    }
    
    // 淘宝
    if (data.taobao) {
        if (data.taobao.table) {
            document.getElementById('taobao-table').querySelector('tbody').innerHTML = data.taobao.table;
        }
        if (data.taobao.images && data.taobao.images.length > 0) {
            var gallery = document.getElementById('taobao-gallery');
            gallery.innerHTML = data.taobao.images.map(function(img) {
                return '<div class="gallery-item" onclick="openImageModal(this)"><img src="' + img.url + '" alt="' + img.alt + '"><div class="caption">' + img.alt + '</div></div>';
            }).join('');
        }
    }
    
    // 京东
    if (data.jd) {
        if (data.jd.table) {
            document.getElementById('jd-table').querySelector('tbody').innerHTML = data.jd.table;
        }
        if (data.jd.images && data.jd.images.length > 0) {
            var gallery = document.getElementById('jd-gallery');
            gallery.innerHTML = data.jd.images.map(function(img) {
                return '<div class="gallery-item" onclick="openImageModal(this)"><img src="' + img.url + '" alt="' + img.alt + '"><div class="caption">' + img.alt + '</div></div>';
            }).join('');
        }
    }
    
    // 推荐
    if (data.recommendation) {
        document.getElementById('recommendation-content').innerHTML = data.recommendation;
    }
    if (data.buyLinks) {
        var linksHtml = data.buyLinks.map(function(link) {
            return '<a href="' + link.url + '" class="buy-link ' + link.platform + '" target="_blank"><i class="fas fa-' + (link.platform === 'taobao' ? 'shopping-bag' : 'box') + '"></i> ' + link.text + '</a>';
        }).join('');
        if (linksHtml) {
            document.getElementById('buy-links').innerHTML = linksHtml;
        }
    }
    if (data.notices) {
        document.getElementById('notice-list').innerHTML = data.notices.map(function(n) {
            return '<li>' + n + '</li>';
        }).join('');
    }
}
