<template>
<div class="fa-input" :style="{'width':width+'px'}" :class="{'fa-input__focus':focus,'has-label':label}" v-if="type!=='textarea'">
    <div class="fa-input-label" :class="{'float':!focus && !model}">{{label}}</div>
    <div class="fa-select fa-input-content" :class="{'is-open':!focus}">
        <div class="fa-select-content">
            <input tabindex="0"  class="fa-select-input"  readonly  v-model="model"
            @focus="focus = true" 
            @blur="focus = false"  @change="handleChange" :disabled="disabled" />
        </div>
        <div class="fa-select-action">
            <svg viewBox="0 0 24 24" class="fa-select-icon"><path d="M7 10l5 5 5-5z"></path></svg>
        </div>
        <div>
            <div class="fa-input-line"></div>
            <div class="fa-input-focus-line " :class="{'focus':focus,'disabled':disabled}"></div>
        </div>
    </div>
    <div>
        <ul>
            <slot></slot>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    name:'faSelect',
    componentName: 'faSelect',
    props:{
        value: '',
        label:'',
        disabled: Boolean,
    },
    data(){
        return{
            focus: false,
        }
    },
    created(){
        this.$on('handleOptionClick', this.handleOptionSelect);
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
    watch:{
        model(){
            console.log(123);
        }
    },
    methods: {
        handleChange() {
            this.$nextTick(() => {
            this.$emit('change', this.model);
            });
        },
        handleQuerySelect(){
            console.log(123);
        },
        handleOptionSelect(options){
            this.model=options.value;
        }
    },
}
</script>
