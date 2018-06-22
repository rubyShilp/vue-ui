<template>
  <div class="center">
    <img src="./../../../images/logo.png">
    <h1>hello VUE</h1>
    <button @click="clickAll()">点击</button>
    <fa-date-picker v-model="startDate"></fa-date-picker>
    <fa-table :data='dataMessage'>
        <fa-table-column prop='name' lable='姓名'></fa-table-column>
        <fa-table-column prop='sex' lable='性别'></fa-table-column>
        <fa-table-column prop='age' lable='年龄'></fa-table-column>
        <fa-table-column prop='email' lable='邮箱'></fa-table-column>
        <fa-table-column lable='操作' >
          <template slot-scope="scope">
            {{scope}}
          </template>
        </fa-table-column>
    </fa-table>
    <!-- <fa-city-picker v-model="startDate"></fa-city-picker> -->
  </div>
</template>
<script src="./login.js"></script>
