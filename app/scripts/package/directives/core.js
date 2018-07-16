import Vue from 'vue';
/**
 * 拖放上传文件
 * v-fa-file-drop='{set:this,name:"file"}'
 * */
Vue.directive('fa-file-drop',{
    bind:function(el, binding, vnode){
        el.ondragleave=(e)=>{
            //阻止离开时的浏览器默认行为
            e.preventDefault();
        };
        el.ondrop=(e)=>{
            //阻止拖放后的浏览器默认行为
            e.preventDefault();
            //获取文件对象
            const data = e.dataTransfer.files;
            // 检测是否有文件拖拽到页面     
            if (data.length < 1) {
                return;
            }
            binding.value({file:data[0]});
        };
        el.ondragenter=(e)=>{
            //阻止拖入时的浏览器默认行为
            e.preventDefault();
        };
        el.ondragover=(e)=>{
            //阻止拖来拖去的浏览器默认行为
            e.preventDefault();
        }
    }
})
Vue.directive('fa-file',{
    update:(el,binding,vnode)=>{
        el.value='';
    }
})