<template>
    <span>
        <ul class="fa-cascader-menu" style="position: relative;">
            <li v-for="(item,index) of options" :key="index" @click="selectOptions(index,item)"><fa-checkbox v-if="!item.children && showChecked" v-model="item.checked">{{item.label}}</fa-checkbox><span v-if="item.children || !showChecked">{{item.label}}</span><i class="fa-icon-arrow-right" v-if="item.children"></i></li>
        </ul>
        <fa-options :options='options[index].children' :showChecked='showChecked' v-if="index>=0 && options[index].children"></fa-options>
    </span>
</template>
<script>
import Emitter from './../../mixins/emitter.js';
export default {
    name:'faOptions',
    mixins:[Emitter],
    data(){
        return{
            index:-1,//下标判断显示不同的列表数据
            selectList:Array(),
        }
    },
    props:{
        options:Array,
        showChecked:false,
    },
    methods:{
        //选择菜单项
        selectOptions(index,item){
            this.index=-1;
            if(item.children){
                this.index=index;
            }else{
                this.index=-1;
            }
            if(!item.children){
                this.$set(this.options,index,item);
                setTimeout(()=>{
                     this.dispatch('faCascader','handleOptionClick',{checked:this.options[index].checked,value:this.options[index].value,label:this.options[index].label});
                },100);
            }
        }
    }
}
</script>
