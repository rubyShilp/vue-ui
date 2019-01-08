export let businessModel=[ { "id": "26427617f7994cc783c21a2d2e23c5cf", "modelName": "321", "businessDescription": "321", "companyId": "1495", "status": 1, "creator": "swaiwai@163.com", "createTime": "Oct 26, 2018 2:09:40 PM", "updater": "", "updateTime": "Oct 27, 2018 3:09:40 AM", "label": "321", "value": "26427617f7994cc783c21a2d2e23c5cf", "children": [ { "id": "17abde7ffcc84fa59a3f0fbde5b36a0d", "businessModelNum": "26427617f7994cc783c21a2d2e23c5cf", "stepNo": "321", "stepName": "321", "stepDescription": "", "certificateType": 1, "companyId": "1495", "status": 1, "creator": "swaiwai@163.com", "createTime": "Oct 26, 2018 2:09:40 PM", "updater": "", "updateTime": "Oct 27, 2018 3:09:40 AM", "value": "17abde7ffcc84fa59a3f0fbde5b36a0d", "label": "321" } ] }, { "id": "2c8e7b731b3c44b889d326ce0b23e196", "modelName": "金融借贷", "businessDescription": "金融借贷统一模型", "companyId": "1495", "status": 1, "creator": "swaiwai@163.com", "createTime": "Nov 1, 2018 11:23:24 PM", "updater": "swaiwai@163.com", "updateTime": "Nov 2, 2018 12:23:24 PM", "label": "金融借贷", "value": "2c8e7b731b3c44b889d326ce0b23e196", "children": [ { "id": "0cc46368f59843269398b13e27e3eb7a", "businessModelNum": "2c8e7b731b3c44b889d326ce0b23e196", "stepNo": "3", "stepName": "还款", "stepDescription": "", "certificateType": 1, "companyId": "1495", "status": 1, "creator": "swaiwai@163.com", "createTime": "Nov 26, 2018 2:53:58 PM", "updater": "", "updateTime": "Nov 27, 2018 4:53:57 AM", "value": "0cc46368f59843269398b13e27e3eb7a", "label": "还款" }, { "id": "6691ca6132c747779879796f97ee1860", "businessModelNum": "2c8e7b731b3c44b889d326ce0b23e196", "stepNo": "1", "stepName": "注册", "stepDescription": "123123阿斯顿撒", "certificateType": 1, "companyId": "1495", "status": 1, "creator": "swaiwai@163.com", "createTime": "Nov 26, 2018 2:53:58 PM", "updater": "", "updateTime": "Nov 27, 2018 4:53:57 AM", "value": "6691ca6132c747779879796f97ee1860", "label": "注册" }, { "id": "bf5e14f01983429a9c5f575c8ddd94ad", "businessModelNum": "2c8e7b731b3c44b889d326ce0b23e196", "stepNo": "2", "stepName": "借贷", "stepDescription": "", "certificateType": 1, "companyId": "1495", "status": 1, "creator": "swaiwai@163.com", "createTime": "Nov 26, 2018 2:53:58 PM", "updater": "", "updateTime": "Nov 27, 2018 4:53:57 AM", "value": "bf5e14f01983429a9c5f575c8ddd94ad", "label": "借贷" } ] }, { "id": "e70cbb690f6540d48409c0ce0f8eb4ad", "modelName": "111", "businessDescription": "1111", "companyId": "1495", "status": 1, "creator": "swaiwai@163.com", "createTime": "Nov 1, 2018 9:07:51 PM", "updater": "swaiwai@163.com", "updateTime": "Nov 2, 2018 10:07:50 AM", "label": "111", "value": "e70cbb690f6540d48409c0ce0f8eb4ad", "children": [ { "id": "bec9b2d21a3f47bf8cff1f3d43f63301", "businessModelNum": "e70cbb690f6540d48409c0ce0f8eb4ad", "stepNo": "22", "stepName": "22", "stepDescription": "22", "certificateType": 2, "companyId": "1495", "status": 1, "creator": "swaiwai@163.com", "createTime": "Nov 29, 2018 5:22:32 PM", "updater": "", "updateTime": "Nov 30, 2018 7:22:32 AM", "value": "bec9b2d21a3f47bf8cff1f3d43f63301", "label": "22" }, { "id": "fcfe0688c3444f3da27c4f1d9c14d227", "businessModelNum": "e70cbb690f6540d48409c0ce0f8eb4ad", "stepNo": "11", "stepName": "11", "stepDescription": "11", "certificateType": 1, "companyId": "1495", "status": 1, "creator": "swaiwai@163.com", "createTime": "Nov 29, 2018 5:22:32 PM", "updater": "", "updateTime": "Nov 30, 2018 7:22:32 AM", "value": "fcfe0688c3444f3da27c4f1d9c14d227", "label": "11" } ] } ] 
export let trees=[{
    label: '一级 1',
    children: [{
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1'
      }]
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '二级 2-2',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  }, {
    label: '一级 3',
    children: [{
      label: '二级 3-1',
      children: [{
        label: '三级 3-1-1'
      }]
    }, {
      label: '二级 3-2',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }];
export let dataMessage=[
    {id:'1',name:'张三',sex:1,age:12,email:'465sdadfaddsfasffasdfasdfsafdsf525@qq.com',children:[
      {id:'1-1',name:'李四',sex:1,age:12,email:'425@qq.com'},
      {id:'1-2',name:'王五',sex:1,age:12,email:'45@qq.com'},
      {id:'1-3',name:'赵六',sex:0,age:12,email:'4655@qq.com'},
    ]},
    {id:'2',name:'李四',sex:1,age:12,email:'425@qq.com',children:[
      {id:'2-1',name:'李四',sex:1,age:12,email:'425@qq.com'},
      {id:'2-2',name:'王五',sex:1,age:12,email:'45@qq.com'},
      {id:'2-3',name:'赵六',sex:0,age:12,email:'4655@qq.com'},
    ]},
    {id:'3',name:'王五',sex:1,age:12,email:'45@qq.com',children:[
      {id:'3-1',name:'李四',sex:1,age:12,email:'425@qq.com'},
      {id:'3-2',name:'王五',sex:1,age:12,email:'45@qq.com'},
      {id:'3-3',name:'赵六',sex:0,age:12,email:'4655@qq.com'},
    ]},
    {id:'4',name:'赵六',sex:0,age:12,email:'4655@qq.com',children:[
      {id:'4-1',name:'李四',sex:1,age:12,email:'425@qq.com'},
      {id:'4-2',name:'王五',sex:1,age:12,email:'45@qq.com'},
      {id:'4-3',name:'赵六',sex:0,age:12,email:'4655@qq.com'},
    ]},
    {id:'5',name:'赵丽颖',sex:0,age:12,email:'4@qq.com',children:[
      {id:'5-1',name:'李四',sex:1,age:12,email:'425@qq.com'},
      {id:'5-2',name:'王五',sex:1,age:12,email:'45@qq.com'},
      {id:'5-3',name:'赵六',sex:0,age:12,email:'4655@qq.com'},
    ]},
    {id:'6',name:'林志玲',sex:0,age:12,email:'46555@qq.com',children:[
      {id:'6-1',name:'李四',sex:1,age:12,email:'425@qq.com'},
      {id:'6-2',name:'王五',sex:1,age:12,email:'45@qq.com'},
      {id:'6-3',name:'赵六',sex:0,age:12,email:'4655@qq.com'},
    ]},
    {id:'7',name:'杨幂',sex:0,age:12,email:'465525@qq.com',children:[
      {id:'7-1',name:'李四',sex:1,age:12,email:'425@qq.com'},
      {id:'7-2',name:'王五',sex:1,age:12,email:'45@qq.com'},
      {id:'7-3',name:'赵六',sex:0,age:12,email:'4655@qq.com'},
    ]},
  ]