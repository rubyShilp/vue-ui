import {mapState} from 'vuex';
import loading from './../../util/components/loading.js';
export default {
  components:{
    'fa-loading':loading
  },
  data(){
    return {
        startDate:'',
        checked:true,
        radio:1,
        userName:12,
        file:'',
        dataMessage:[
          {name:'张三',sex:1,age:12,email:'465525@qq.com'},
          {name:'李四',sex:1,age:12,email:'465525@qq.com'},
          {name:'王五',sex:1,age:12,email:'465525@qq.com'},
          {name:'赵六',sex:0,age:12,email:'465525@qq.com'},
          {name:'赵丽颖',sex:0,age:12,email:'465525@qq.com'},
          {name:'林志玲',sex:0,age:12,email:'465525@qq.com'},
          {name:'杨幂',sex:0,age:12,email:'465525@qq.com'}
        ]
    }
  },
  methods:{
    clickAll(){
      this.$message('那么')
    },
    handleSelectChange(row){
      console.log(row);
    },
    //拖放上传文件
    obtainFile(val){
      this.file=val.file;
      console.log(this.file);
    }
  }
}