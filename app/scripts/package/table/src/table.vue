<template>
<table border="1" width='500'>
    <thead>
        <tr> 
            <td v-for="list of theadList">
                {{list.lable}}
            </td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item of data">
            <td v-for="list of theadList">
                <fa-table-cell :value='item[list.prop]' :row='item'></fa-table-cell>
            </td>
        </tr>
    </tbody>
</table>
</template>
<script src='./table.js'></script>
