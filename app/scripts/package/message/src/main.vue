<template>
<div class="layerTips" v-if="visible">
    <slot>
        <p class="layerTipsBox">{{message}}</p>
    </slot>
</div>
</template>
<style scoped>
.layerTips{
  position: fixed;
  z-index: 1001;
  text-align: center;
  width: auto;
  top:45%;
  left: 0;
  right:0;
  margin:0 auto;
}
.layerTipsBox{
    display: inline-block;
    padding:15px 20px;
    background: rgba(0,0,0,0.7);
    z-index: 999;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    color:white;
    font-size: 12px;
}
</style>
<script>
export default {
    data(){
        return{
            message:'',
            visible:false,
            closed:false,
            timer:null,
        }
    },
    watch: {
        closed(newVal) {
            if (newVal) {
                this.visible = false;
            }
        }
    },
    methods:{
        close() {
            this.closed = true;
        },
        startTimer(){
            setTimeout(()=>{
                if (!this.closed) {
                    this.close();
                }
            },2000)
        }
    },
    mounted(){
        this.startTimer();
    }
}
</script>
