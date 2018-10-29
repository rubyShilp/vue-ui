import {mapState} from 'vuex';
import Sortable from 'sortablejs';
import loading from './../../util/components/loading.js';
import {trees,dataMessage,businessModel} from './data.js';
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
        dataMessage:dataMessage,
        optionList: [ "3232/2"],
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        data: trees,
        options: businessModel,
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
  mounted() {
    this.rowDrop();
  },
  methods:{
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector('.fa-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.dataMessage.splice(oldIndex, 1)[0]
          _this.dataMessage.splice(newIndex, 0, currRow)
        }
      })
    },
    clickAll(val){
      this.isVisible=true;
      if(val==1){
        this.$message({
          message:'hello world',
          type:'success'
        })
      }else if(val==2){
        this.$message({
          message:'hello world',
          type:'info'
        })
      }else if(val==3){
        this.$message({
          message:'hello world',
          type:'warning'
        })
      }else if(val==4){
        this.$message({
          message:'hello world',
          type:'danger'
        })
      }else if(val==5){
        this.$message({
          message:'hello world',
          type:'own'
        })
      }else{
        this.$message('hello world');
      }
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
    },
    selectClick(value){
      console.log(value);
    }
  }
}