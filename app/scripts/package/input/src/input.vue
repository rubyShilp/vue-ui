<template>
<label>
    <input :type='type' v-model="model" @focus="focus = true"  @blur="focus = false" @change="handleChange" :disabled="disabled"/>
    <slot></slot>
</label>
</template>
<script>
export default {
    name:'faInput',
    componentName: 'faInput',
    props:{
        type:'text',
        value: '',
        disabled: false,
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
