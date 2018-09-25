import {mapState} from 'vuex';
import loading from './../../util/components/loading.js';
export default {
  components:{
    'fa-loading':loading
  },
  data(){
    return {
        startDate:'',
        percentage:30,//进度条百分比
        checked:true,
        isVisible:false,
        radio:1,
        userName:'',
        cityName:'',
        selectName:2,
        file:'',
        fileList:new Array(),
        dataMessage:[
          {name:'张三',sex:1,age:12,email:'465sdadfaddsfasffasdfasdfsafdsf525@qq.com'},
          {name:'李四',sex:1,age:12,email:'425@qq.com'},
          {name:'王五',sex:1,age:12,email:'45@qq.com'},
          {name:'赵六',sex:0,age:12,email:'4655@qq.com'},
          {name:'赵丽颖',sex:0,age:12,email:'4@qq.com'},
          {name:'林志玲',sex:0,age:12,email:'46555@qq.com'},
          {name:'杨幂',sex:0,age:12,email:'465525@qq.com'}
        ],
        optionList: [ "王五/谁"] ,
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        data: [{
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
        }],
        options: [{
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        },{
          value: 'dda',
          label: '王五',
          children: [{
            value: '1',
            label: '谁'
          }, {
            value: '2',
            label: '22'
          }, {
            value: '123',
            label: 'dda2'
          }]
      }],
        defaultProps:{
          children: 'children',
          label: 'label'
        }
    }
  },
  beforeMount () {
    // this.$loading(true);
    // setTimeout(()=>{
    //   this.$loading(false);
    // },2000)
  },
  methods:{
    clickAll(val){
      this.isVisible=true;
      //this.$message('那么'+val)
    },
    handleSelectChange(row){
      console.log(row);
    },
    //拖放上传文件
    obtainFile(val){
      this.file=val.file;
      console.log(this.file);
    },
    //上传附件
    uploadFile(list){
      this.fileList.push(list);
    },
    //删除附件
    deleteFile(index){
      this.fileList.splice(index,1);
    },
    //下载文件
    downloadFile(list){
      console.log(list);
    },
    //树形菜单
    handleNodeClick(data) {
      console.log(data);
    },
    sizeChanage(size){
      console.log(size);
    }
  }
}