import {mapState} from 'vuex';
import loading from './../../util/components/loading.js';
export default {
  components:{
    'fa-loading':loading
  },
  data(){
    return {
        startDate:''
    }
  },
  methods:{
    clickAll(){
      this.$message('那么')
    }
  }
}