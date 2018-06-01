<template>
<table>
    <thead>
        <tr><slot /></tr>
    </thead>
    <tbody>
        <tr v-for="item of data">
            <td v-for="list of theadList">
                {{item[list.prop]}}
            </td>
        </tr>
    </tbody>
</table>
</template>
<script src='./table.js'></script>
