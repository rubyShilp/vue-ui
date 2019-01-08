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
        optionList: [],
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        data: trees,
        businessModel:[],
        defaultProps:{
          children: 'children',
          label: 'label'
        }
    }
  },
  beforeMount () {
    sessionStorage.removeItem('TOKEN');
    this.userLogin();
    // this.$loading(true);
    // setTimeout(()=>{
    //   this.$loading(false);
    // },2000)
  },
  mounted() {
    //this.rowDrop();
  },
  watch: {
    businessModel(){
      if(this.businessModel.length>0){
        this.getStepOptions();
      }
    }
  },
  methods:{
    //行拖拽
    rowDrop(data) {
      const tbody = document.querySelector('.fa-table__expanded-cell tbody');
      if(tbody){
        Sortable.create(tbody, {
          onEnd({ newIndex, oldIndex }) {
            const currRow=data.splice(oldIndex, 1)[0];
            data.splice(newIndex, 0, currRow)
          }
        })
      }
    },
    expandChage(row){
      this.$nextTick(()=>{
        this.rowDrop(row.children)
      })
    },
    //tab标签删除
    tagClose(row){
      console.log(row);
    },
    clickAll(val){
      this.selectName='12';
      let href=window.location.href;
      console.log(href);
      // this.isVisible=true;
      // if(val==1){
      //   this.$message({
      //     message:'hello world',
      //     type:'success'
      //   })
      // }else if(val==2){
      //   this.$message({
      //     message:'hello world',
      //     type:'info'
      //   })
      // }else if(val==3){
      //   this.$message({
      //     message:'hello world',
      //     type:'warning'
      //   })
      // }else if(val==4){
      //   this.$message({
      //     message:'hello world',
      //     type:'danger'
      //   })
      // }else if(val==5){
      //   this.$message({
      //     message:'hello world',
      //     type:'own'
      //   })
      // }else{
      //   this.$message('hello world');
      // }
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
    },
    userLogin(){
      //swaiwai@163.com qwer1234 348737315@qq.com
      let params={account:'swaiwai@163.com',password:'qwer1234'};
      this.$store.dispatch('loginModule/userLogin',params).then(res=>{
        if(res.result==='success'){
          sessionStorage.removeItem('TOKEN');
          sessionStorage.removeItem('USER_INFO');
          sessionStorage.setItem('TOKEN', res.data.token);
          sessionStorage.setItem('USER_INFO',JSON.stringify(res.data));
          this.userInfo=res.data;
          this.getBusinessOptions();
        }
      })
    },
    getBusinessOptions(){
      this.$store.dispatch('loginModule/businessModel').then(res=>{
          if(res.result==='success'){
              this.businessModel = res.data;
              this.$nextTick(()=>{
                for(let i = 0; i < this.businessModel.length; i++){
                  this.businessModel[i].label = this.businessModel[i].modelName;
                  this.businessModel[i].value = this.businessModel[i].id;
                }
              })
          }
      })
    },
    getStepOptions(){
      for(let i=0;i<this.businessModel.length;i++){
        let params = {businessModelNum:this.businessModel[i].id};
        this.$store.dispatch('loginModule/businessModelSteps',params).then(res=>{
            if(res.result==='success'){
                if(res.data.length !=0){
                  for(let i = 0; i < res.data.length;i++){
                    res.data[i].value = res.data[i].id;
                    res.data[i].label = res.data[i].stepName;
                  }
                  this.businessModel[i].children = res.data;
                }
            }
        })
      }
        
    },
  }
}