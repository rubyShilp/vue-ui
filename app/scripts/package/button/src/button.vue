<template>
<button tabindex="0" type="button" @click.stop='eventClick()' class="fa-button hover fa-raised-button fa-primary-color fa-inverse " style="user-select: none; outline: none; -webkit-appearance: none;">
    <div class="fa-button-wrapper">
        <div class="fa-ripple-wrapper"></div>
    <slot></slot>
    </div>
</button>
</template>
<script>
export default {
    name: 'faButton',
    props:{
        color:String,
        icon:String,
    },
    methods: {
        //绑定点击事件
        eventClick(){
            this.$emit('click',{});
        },
    }
}
</script>