<template>
<div class="fa-input" :style="{'width':width+'px'}" :class="{'fa-input__focus':focus,'has-label':label}" v-if="type!=='textarea'">
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
            <div class="fa-input-focus-line " :class="{'focus':focus,'disabled':disabled}"></div>
        </div>
    </div>
    <div class="fa-cascader-option" :style="{'top':label?'58px':'38px'}" v-if="showOptions">
        <ul class="fa-cascader-menu">
            <li v-for="(item,index) of options" :key="index" @click="selectOptions(index,item)"><fa-checkbox v-if="!item.children && showChecked" v-model="item.checked">{{item.label}}</fa-checkbox><span v-if="item.children || !showChecked">{{item.label}}</span><i class="fa-icon-arrow-right" v-if="item.children"></i></li>
        </ul>
        <fa-options :options='options[index].children' :showChecked='showChecked' v-if="index>=0 && options[index].children"></fa-options>
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
            item.checked!=item.checked;
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
        },
        //获取选项的值
        handleOptionSelect(options){
            if(options.checked){
                if(this.selectList.length>0){
                    let hiddent=false;
                    for(let i=0;i<this.selectList.length;i++){
                        if(options.value===this.selectList[i].value){
                           hiddent=true;
                            break;
                        }
                    }
                    if(!hiddent){
                        this.selectList.push(options);
                    }
                }else{
                    this.selectList.push(options);
                }
            }else{
                for(let i=0;i<this.selectList.length;i++){
                    if(options.value===this.selectList[i].value){
                        this.selectList.splice(i,1);
                        break;
                    }
                }
            }
            let items=[];
            for(let i=0;i<this.selectList.length;i++){ 
                if(this.selectList[i].checked){
                    items.push(this.selectList[i].label);
                }
            }
            this.model=this.selectList;
            if(items.length>0){
                this.$refs.values.value=items.join(';');
            }else{
                this.$refs.values.value='';
            }
            
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
