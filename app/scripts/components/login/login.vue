<template>
  <div class="center">
    <img src="./../../../images/logo.png">
    <h1>hello VUE</h1>
    <button @click="clickAll()">点击</button>
    <fa-date-picker v-model="startDate"></fa-date-picker>
    <fa-table :data='dataMessage'>
        <fa-table-column label='选中' width='20'>
          <template slot-scope="scope">
              <input type="checkbox"/>
          </template>
        </fa-table-column>
        <fa-table-column prop='name' label='姓名' width='60'></fa-table-column>
        <fa-table-column prop='sex' label='性别' width='60'></fa-table-column>
        <fa-table-column prop='age' label='年龄' width='60'></fa-table-column>
        <fa-table-column prop='email' label='邮箱' width='60'></fa-table-column>
        <fa-table-column label='操作' width='60'>
          <template slot-scope="scope">
            <a href="javaScript:;">详情</a>
          </template>
        </fa-table-column>
    </fa-table>
    <!-- <fa-city-picker v-model="startDate"></fa-city-picker> -->
  </div>
</template>
<script src="./login.js"></script>
