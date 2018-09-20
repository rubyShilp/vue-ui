<template>
<div class="fa-input" :style="{'width':width+'px'}" :class="{'has-label':label}" v-if="type!=='textarea'">
    <div class="fa-input-label" :class="{'float':!focus && !model}">{{label}}</div>
    <div class="fa-select fa-input-content fa-select-position" :class="{'is-open':!focus}">
        <div class="fa-select-content">
            <input tabindex="0"  class="fa-select-input" type="hidden"  v-model="model"/>
            <input class="fa-select-input" @focus.stop="focus = true;showOptions=true"  readonly
            @blur="focus = false;" :placeholder="placeholder"  :disabled="disabled"  ref="values">
        </div>
        <div class="fa-select-action">
            <svg viewBox="0 0 24 24" class="fa-select-icon"><path d="M7 10l5 5 5-5z"></path></svg>
        </div>
        <div>
            <div class="fa-input-line"></div>
            <div class="fa-input-focus-line " :class="{'fa-input__focus':focus,'focus':focus,'disabled':disabled}"></div>
        </div>
    </div>
    <div class="fa-cascader-option" :style="{'top':label?'58px':'38px'}" v-if="showOptions">
        <ul class="fa-cascader-menu">
            <li @click="selectAll()"><em>全部</em></li>
            <li v-for="(item,index) of options" :key="index" @click="selectOptions(index,item)"><fa-checkbox v-if="!item.children && showChecked" v-model="item.checked">{{item.label}}</fa-checkbox><em v-if="item.children || !showChecked">{{item.label}}</em><i class="fa-icon-arrow-right" v-if="item.children"></i></li>
        </ul>
        <fa-options :options='options[index].children' :className='className' :checkRadio='checkRadio' :classCancel='classCancel' :showChecked='showChecked' v-if="index>=0 && options[index].children"></fa-options>
    </div>
</div>
</template>
<script>
import faOptions from './options.vue';
export default {
    name:'faCascader',
    componentName: 'faCascader',
    components:{
        'fa-options':faOptions
    },
    props:{
        value: '',
        label:'',
        disabled: Boolean,
        width:270,
        placeholder:String,
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
    data(){
        return{
            focus: false,
            showOptions:false,
            index:-1,//选择菜单项的下标，根据下标显示不同的菜单项
            selectList:Array()
        }
    },
    computed:{ 
        model:{
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    beforeMount(){
        this.optionsUpdate(this.options);
    },
    created(){
        this.$on('handleOptionClick', this.handleOptionSelect);
    },
    methods:{
        //变更数据,添加复选框
        optionsUpdate(data){
            for(let i=0;i<data.length;i++){
                if(!data[i].children){
                    data[i].checked=false;
                }else{
                    this.optionsUpdate(data[i].children);
                }
            }
            this.options=data;
        },
        //选择菜单项
        selectOptions(index,item){
            this.model='';
            this.$refs.values.value='';
            this.index=-1;
            if(item.children){
                this.index=index;
            }else{
                this.index=-1;
            }
        },
        //全部
        selectAll(){
            this.showOptions=false;
            this.model=this.options;
            this.$refs.values.value='全部';
            this.index=-1;
        },
        //获取选项的值
        handleOptionSelect(options){
            this.showOptions=options.showOptions;
            let list=JSON.parse(options.list);
            let items=[];
            if(list.length>0){
                for(let j=0;j<list.length;j++){
                    items.push(list[j].label+'/'+list[j].label);
                }
            }
            if(items.length>0){
                this.model=list;
                this.$refs.values.value=items.join(';');
            }else{
                this.model='';
                this.$refs.values.value='';
            }
            this.index=-1;
        },
        //关闭选项框
        optionClose(){
            if(!this.$el.contains(event.target)){
                this.showOptions=false;
                this.index=-1;
            }
        }
    },
    mounted(){
        //绑定事件
        this.$nextTick(()=>{
            window.addEventListener('click', this.optionClose);
        })
    },
    beforeDestroy () {
        //销毁并移除事件
        window.removeEventListener('click', this.optionClose)
    }
}
</script>
