import {mapState} from 'vuex';
import SockJS from 'sockjs-client';
export default {
  data(){
    return {
      socket:null
    }
  },
  computed:{
    ...mapState({
         
    })
  },
  beforeMount(){
     
  },
  methods:{
     login(){
        this.$store.dispatch("loginModule/login",{account:'465559733@qq.com',password:'1111qqqq'}).then(res=>{
          //sessionStorage.setItem('TOKEN',res.data.token);
        })
     }
  }
}