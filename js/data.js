// 任务数据
const tasksData = {
  "version": "2.1.0",
  "lastUpdated": "2026-05-22",
  "tasks": [
    {
      "id": 3,
      "content": "确定化妆师（热门档期紧张）",
      "status": "pending",
      "priority": "high",
      "category": "婚礼",
      "owner": "user",
      "due_date": "2026-05-25",
      "output_file": "task.html?id=3",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 4,
      "content": "定做西装（周期1-2个月，需尽快）【地点：瑞金洲际酒店鑫源楼草坪婚礼】",
      "status": "pending",
      "priority": "high",
      "category": "婚礼",
      "owner": "user",
      "due_date": "2026-05-30",
      "output_file": "task.html?id=4",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 5,
      "content": "试婚纱",
      "status": "pending",
      "priority": "high",
      "category": "婚礼",
      "owner": "user",
      "due_date": "2026-06-01",
      "output_file": "task.html?id=5",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 6,
      "content": "拍红底照（结婚登记照）",
      "status": "pending",
      "priority": "medium",
      "category": "婚礼",
      "owner": "user",
      "due_date": "2026-06-10",
      "output_file": "task.html?id=6",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 7,
      "content": "预约领证（8.16婚礼，提前确定民政局时间）",
      "status": "pending",
      "priority": "high",
      "category": "婚礼",
      "owner": "user",
      "due_date": "2026-06-15",
      "output_file": "task.html?id=7",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 8,
      "content": "婚礼流程方案",
      "status": "pending",
      "priority": "medium",
      "category": "婚礼",
      "owner": "user",
      "due_date": "2026-06-30",
      "output_file": "task.html?id=8",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 9,
      "content": "购买甲醛喷剂【618攻略截止5.25，下单5.25-6.3】",
      "status": "pending",
      "priority": "high",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-05-25",
      "output_file": "task.html?id=9",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 10,
      "content": "购买强弱电箱盖【618攻略截止5.25，下单5.25-6.3】",
      "status": "pending",
      "priority": "high",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-05-25",
      "output_file": "task.html?id=10",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 11,
      "content": "购买浴室百叶帘【618攻略截止5.25，下单5.25-6.3】",
      "status": "pending",
      "priority": "high",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-05-25",
      "output_file": "task.html?id=11",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 12,
      "content": "购买床上用品【618攻略截止5.28，下单5.28-6.5】",
      "status": "pending",
      "priority": "high",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-05-28",
      "output_file": "task.html?id=12",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 13,
      "content": "购买次卧飘窗书桌【需提前购买散味】【618攻略截止5.28，下单5.28-6.5】",
      "status": "pending",
      "priority": "high",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-05-28",
      "output_file": "task.html?id=13",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 14,
      "content": "购买电视【618攻略截止6.5，下单6.10-6.15】【需求：85寸，6000元以内最优性价比】",
      "status": "pending",
      "priority": "medium",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-06-05",
      "output_file": "task.html?id=14",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 15,
      "content": "购买扫地机器人【618攻略截止6.5，下单6.10-6.15】【需研究方案：对比石头/科沃斯/追觅】",
      "status": "pending",
      "priority": "medium",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-06-05",
      "output_file": "task.html?id=15",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 16,
      "content": "购买壁画【618攻略截止6.5，下单6.10-6.15】",
      "status": "pending",
      "priority": "medium",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-06-05",
      "output_file": "task.html?id=16",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 17,
      "content": "购买花瓶【618攻略截止6.5，下单6.10-6.15】",
      "status": "pending",
      "priority": "medium",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-06-05",
      "output_file": "task.html?id=17",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 18,
      "content": "买男戒指【618攻略截止6.10，下单6.10-6.15】",
      "status": "pending",
      "priority": "medium",
      "category": "婚礼",
      "owner": "hermes",
      "due_date": "2026-06-10",
      "output_file": "task.html?id=18",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 19,
      "content": "购买家用绿植【入住后购买，不赶618】",
      "status": "pending",
      "priority": "low",
      "category": "新房",
      "owner": "hermes",
      "due_date": "2026-07-15",
      "output_file": "task.html?id=19",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 20,
      "content": "购买其他家用（补充清单）",
      "status": "pending",
      "priority": "low",
      "category": "新房",
      "owner": "user",
      "due_date": "2026-07-31",
      "output_file": "task.html?id=20",
      "created_at": "2025-05-19T21:54:00"
    },
    {
      "id": 21,
      "content": "办理退税（个税汇算清缴，5月底截止）",
      "status": "pending",
      "priority": "high",
      "category": "个人",
      "owner": "hermes",
      "output_file": null,
      "created_at": "2026-05-22T00:31:24.354270",
      "completed_at": null,
      "due_date": "2026-05-31"
    }
  ]
};

// 获取任务统计
function getTaskStats() {
    const tasks = tasksData.tasks;
    const today = new Date();
    const threeDaysLater = new Date();
    threeDaysLater.setDate(today.getDate() + 3);
    
    return {
        total: tasks.length,
        pending: tasks.filter(t => t.status === 'pending').length,
        completed: tasks.filter(t => t.status === 'completed').length,
        high: tasks.filter(t => t.priority === 'high' && t.status === 'pending').length,
        medium: tasks.filter(t => t.priority === 'medium' && t.status === 'pending').length,
        low: tasks.filter(t => t.priority === 'low' && t.status === 'pending').length,
        wedding: tasks.filter(t => t.category === '婚礼' && t.status === 'pending').length,
        newhome: tasks.filter(t => t.category === '新房' && t.status === 'pending').length,
        hermes: tasks.filter(t => t.owner === 'hermes' && t.status === 'pending').length,
        user: tasks.filter(t => t.owner === 'user' && t.status === 'pending').length,
        dueSoon: tasks.filter(t => {
            if (t.status === 'completed' || !t.due_date) return false;
            const due = new Date(t.due_date);
            return due <= threeDaysLater;
        }).length
    };
}