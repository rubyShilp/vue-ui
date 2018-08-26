<template>
    <div class="fixed-pop-bg" v-if="visible">
        <div class="com-pop" :style="{'width':width+'px','height':height+'px'}">
            <div class="fixed-pop-tit">{{title}}</div>
            <a href="javascript:;" class="close-icon" @click="close()"><i class="fa-icon-close"></i></a>
            <fa-scrollbar class="com-pop-text" :style="{'height':(height>=154?(height-64):100)+'px'}">
                <slot></slot>
                <div class="fa-dialog-footer">
                    <slot name='footer'></slot>
                </div>
            </fa-scrollbar>
        </div>
    </div>  
</template>
<script>
export default {
    props:{
        title:String,//标题
        visible:Boolean,//是否显示弹出框
        width:Number,//弹出框的宽度
        height:Number,//弹出框的高度
    },
    methods:{
        //关闭弹出框
        close(){
           this.$emit('beforeClose',this.visible);
        }
    }
}
</script>
