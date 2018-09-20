<template>
    <span>
        <ul class="fa-cascader-menu" style="position: relative;" v-if="!checkRadio">
            <li @click="selectOptions('all','')"><fa-checkbox v-model="checked">全部</fa-checkbox></li>
            <li v-for="(item,index) of options" :key="index" @click="selectOptions(index,item)">
                <fa-checkbox v-if="!item.children && showChecked" v-model="item.checked">{{item.label}}</fa-checkbox><em v-if="item.children || !showChecked">{{item.label}}</em><i class="fa-icon-arrow-right" v-if="item.children"></i>
            </li>
            <li>
                <fa-button :className='className' @click="confirm()">确认</fa-button>
                <fa-button :className='classCancel' @click="cancel()">取消</fa-button>
            </li>
        </ul>
        <ul class="fa-cascader-menu" style="position: relative;" v-if="checkRadio">
            <li v-for="(item,index) of options" :key="index">
                <fa-radio v-if="!item.children && showChecked" v-model="radioChecked" :label="item.value">{{item.label}}</fa-radio><em v-if="item.children || !showChecked">{{item.label}}</em><i class="fa-icon-arrow-right" v-if="item.children"></i>
            </li>
            <li>
                <fa-button :className='className' @click="confirm()">确认</fa-button>
                <fa-button :className='classCancel' @click="cancel()">取消</fa-button>
            </li>
        </ul>
        <!-- <fa-options :options='options[index].children' :showChecked='showChecked' v-if="index>=0 && options[index].children"></fa-options> -->
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
            checked:false,
            radioChecked:null
        }
    },
    props:{
        options:Array,
        showChecked:false,
        className:{
            type:String,
            default:'fa_regin_btn'
        },
        classCancel:{
            type:String,
            default:'fa_regin_btn_gray'
        },
        checkRadio:{
            type:Boolean,
            default:false
        }
    },
    beforeMount(){
        this.selectAll();
    },
    methods:{
        //根据数据判断是否选中全选
        selectAll(){
            for(let i=0;i<this.options.length;i++){
                if(!this.options[i].checked){
                    this.checked=false;
                    break;
                }else{
                    this.checked=true;
                }
            }
        },
        //选择菜单项
        selectOptions(index,item){
            this.$nextTick(()=>{
                if(index==='all'){
                    this.checked=!this.checked;
                    if(this.checked){
                        for(let i=0;i<this.options.length;i++){
                            this.options[i].checked=true;
                            this.$set(this.options,i,this.options[i]);
                        }
                    }else if(!this.checked){
                        for(let i=0;i<this.options.length;i++){
                            this.options[i].checked=false;
                            this.$set(this.options,i,this.options[i]);
                        }
                    }
                }else{
                    if(!item.children){
                        this.$set(this.options,index,item);
                    }
                    this.selectAll();
                }
               
            })
        },
        //确认选择
        confirm(){
            this.selectList=new Array();
            if(this.checkRadio){
                 for(let i=0;i<this.options.length;i++){
                    if(this.options[i].value===this.radioChecked){
                        this.selectList.push(this.options[i]);
                    }
                }
            }else{
                for(let i=0;i<this.options.length;i++){
                    if(this.options[i].checked){
                        this.selectList.push(this.options[i])
                    }
                }
            }           
            setTimeout(()=>{
                this.dispatch('faCascader','handleOptionClick',{showOptions:false,list:JSON.stringify(this.selectList)});
            },100);
        },
        //取消
        cancel(){
            this.dispatch('faCascader','handleOptionClick',{showOptions:false,list:JSON.stringify([])});
        }
    }
}
</script>
