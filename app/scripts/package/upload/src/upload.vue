<template>
<div>
    <slot></slot>
    <input type="file" v-fa-file='workFile' multiple @change="upload($event)"/>
    <ul>
        <li v-for="list of fileList" :key="list">
            <label>{{list.fileName}}</label>
        </li>
    </ul>
</div>    
</template>
<script>
import './../../directives/core.js';
export default {
    name:'faUpload',
    data(){
        return{
            workFile:"",
        }
    },
    props:{
        //附件列表
        fileList:{
            type:Array,
            default:new Array()
        },
        //可上传的附件类型
        fileTypes:{
            type:String,
            default:'.docx,.pdf,.doc,.wps,.xlsx,.xls,.jpg,.png,.jpeg,.jpng'
        },
        //最多上传多少个文件
        limit:{
            type:Number,
            default:3
        },
        //上传文件最大不会超过多少M
        size:{
            type:Number,
            default:20
        },
    },
    methods:{
        //上传附件
        upload(e){
            this.workFile=this.fileUpload(e,this.size);
            if(!this.workFile){
                this.workFile='';
            }else{
                let suffix=this.workFile.name.substring(this.workFile.name.lastIndexOf('.'),this.workFile.name.length);
                this.fileList.push({
                    suffix:suffix,
                    fileName:this.workFile.name
                })
            }
        },
        //判断上传的附件
        fileUpload(e,size){
            let files = e.target.files || e.dataTransfer.files;
            if(!files.length){
                return false;
            }
            let fileType=files[0].name.substring(files[0].name.lastIndexOf('.'),files[0].name.length);
            let type=this.fileTypes.split(',');
            let fileTypeBoolean=false;
            for(let i=0;i<type.length;i++){
                if(fileType===type[i]){
                    fileTypeBoolean=true;
                    break;
                }
            }
            if(!fileTypeBoolean){
                this.$message("请上传"+this.fileTypes+"等格式文件!");
                this.workFile='';
                return false;
            }
            if((files[0].size/1024/1024)>=size){
                this.$message('文件大小不得超过'+size+'M');
                this.workFile='';
                return false;
            }else if((files[0].size/1024)===0){
                this.$message('文件大小不得小于0KB!');
                this.workFile='';
                return false;
            }
            return files[0];
        }
    }
}
</script>
