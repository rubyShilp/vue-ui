import {slotsToHeaderProps} from './grid/grid-util.js';
export default {
    data(){
        return{
            theadList:new Array(),
        }
    },
    props:{
        data:{
            type:Array,
            default:new Array()
        },
        options: {
            type: Object,
            default: undefined
        },
    },
    mounted(){
        let heads=Object.assign({
          }, {header: slotsToHeaderProps(this.$slots.default)},this.options);
          for(let i=0;i<heads.header.length;i++){
            this.theadList.push(heads.header[i].propsData);
          }
    }
}