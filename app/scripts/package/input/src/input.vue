<template>
<div>
    <div class="fa-input" :style="{'width':width+'px'}" :class="{'fa-input__focus':focus,'has-label':label}" v-if="type!=='textarea'">
        <div class="fa-input-label" :class="{'float':!focus && !model}">{{label}}</div>
        <div class="fa-text-field fa-input-content fa-select-position">
            <slot name="left"></slot>
            <input tabindex="0" :type='type' class="fa-text-field-input" :maxlength="maxlength" :placeholder="placeholder" v-model="model"
            @focus="focus = true" 
            @blur="focus = false" @change="handleChange" :disabled="disabled">
            <slot name="right"></slot>
            <div>
                <div class="fa-input-line"></div>
                <div class="fa-input-focus-line " :class="{'focus':focus,'disabled':disabled}"></div>
            </div>
            <div class="fa-input-help" v-if="type!=='number' && maxlength>0"><div></div><div>{{model.length}} / {{maxlength}}</div></div>
        </div>
    </div>
    <div class="fa-input" :style="{'width':width+'px'}" :class="{'fa-input__focus':focus,'has-label':label}" v-if="type==='textarea'">
        <slot></slot>
        <div class="fa-input-label" :class="{'float':!focus && !model}">{{label}}</div>
        <div class="fa-text-field fa-input-content">
            <div class="fa-text-field-multiline">
                <textarea   rows="1" class="fa-text-field-textarea-hide fa-text-field-input"></textarea>
                <textarea tabindex="0" :placeholder="placeholder" :maxlength="maxlength"  :rows="rows" v-model="model" @focus="focus = true"  @blur="focus = false" @change="handleChange" :disabled="disabled" class="fa-text-field-input fa-text-field-textarea"></textarea>
            </div>
            <div>
                <div class="fa-input-line"></div>
                <div class="fa-input-focus-line " :class="{'focus':focus,'disabled':disabled}"></div>
            </div>
            <div class="fa-input-help" v-if="maxlength>0"><div></div><div>{{model.length}} / {{maxlength}}</div></div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'faInput',
    componentName: 'faInput',
    props:{
        type:'text',
        value: '',
        width:'',
        placeholder:'',
        rows:'4',
        label:'',
        maxlength:0,
        disabled: Boolean,
    },
    data(){
        return{
            focus: false
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
    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
        });
      }
    }
}
</script>
