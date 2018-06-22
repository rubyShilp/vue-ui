<template>
<fa-table-column :row='row' :value='value'></fa-table-column>
</template>
<script>
export default {
    props:{
        value:{
            type:String,
            default:''
        },
        row:{
            type:JSON,
            default:{}
        }
    }
}
</script>
