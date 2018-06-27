<template>
  <div class="center">
    <img src="./../../../images/logo.png">
    <h1>hello VUE</h1>
    <button @click="clickAll()">点击</button>
    <fa-date-picker v-model="startDate"></fa-date-picker>
    <fa-table :data='dataMessage' border @selection-change="handleSelectChange">
        <fa-table-column type="selection" width="55"></fa-table-column>
        <fa-table-column prop='name' label='姓名'></fa-table-column>
        <fa-table-column prop='sex' label='性别'>
          <template slot-scope="scope">
            <span>{{scope.row.sex | sexName}}</span>
          </template>
        </fa-table-column>
        <fa-table-column prop='age' label='年龄'></fa-table-column>
        <fa-table-column prop='email' label='邮箱'>
          <!-- <template slot-scope="scope">
            <fa-tooltip :content="scope.row.email" placement="bottom">
                <fa-tag>{{scope.row.email}}</fa-tag>
            </fa-tooltip>
          </template> -->
        </fa-table-column> 
        <fa-table-column label='操作'>
          <template slot-scope="scope">
            <a href="javaScript:;" @click="handleSelectChange(scope.row)">详情</a>
            <a href="javaScript:;" @click="handleSelectChange(scope.row)">签署</a>
            <a href="javaScript:;" @click="handleSelectChange(scope.row)">审核</a>
          </template>
        </fa-table-column>
    </fa-table>
    <!-- <fa-city-picker v-model="startDate"></fa-city-picker> -->
    <!--拖放上传文件-->
    <div style="width:500px;height:300px;" v-fa-file-drop='obtainFile'>
      {{file?file.name:''}}
    </div>
  </div>
</template>
<script src="./login.js"></script>
