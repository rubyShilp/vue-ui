<template>
  <div class="center">
    <img src="./../../../images/logo.png">
    <h1>hello VUE</h1>
    <button @click="clickAll()">点击</button>
    <fa-date-picker v-model="startDate"></fa-date-picker>
    <fa-checkbox v-model="checked">备选项</fa-checkbox>
    <br/>
    <fa-radio v-model="radio" :label="1">备选项</fa-radio>
    <fa-radio v-model="radio" :label="2">备选项</fa-radio>
    <br/>
    <fa-card shadow="always" style="width:480px">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <button>操作</button>
      </div>
      <div>
        1212
      </div>
    </fa-card>
  <br/>
  <fa-input type='text' v-model="userName" label='用户名' maxlength='10' width='200'></fa-input>{{userName}}
  <br/>
  <fa-select v-model="selectName" label='案件状态'>
    <fa-option label='张三' value='1'></fa-option>
    <fa-option label='李四' value='2'></fa-option>
    <fa-option label='王五' value='3'></fa-option>
    <fa-option label='赵六' value='4'></fa-option>
  </fa-select>
  <br/>
    <fa-scrollbar class="div_border aside_left">
      <fa-table :data='dataMessage' border tableCenter   @selection-change="handleSelectChange">
          <fa-table-column type="selection" width="55"></fa-table-column>
          <fa-table-column prop='name' label='姓名'></fa-table-column>
          <fa-table-column prop='sex' label='性别'>
            <template slot-scope="scope">
              <span>{{scope.row.sex | sexName}}</span>
            </template>
          </fa-table-column>
          <fa-table-column prop='age' label='年龄'></fa-table-column>
          <fa-table-column prop='email' label='邮箱'>
            <template slot-scope="scope">
              <fa-tooltip  :content="scope.row.email" placement="bottom" effect="light">
                <span>{{scope.row.email}}</span>
              </fa-tooltip>
            </template>
          </fa-table-column> 
          <fa-table-column label='操作'>
            <template slot-scope="scope">
              <a href="javaScript:;" @click="handleSelectChange(scope.row)">详情</a>
              <a href="javaScript:;" @click="handleSelectChange(scope.row)">签署</a>
              <a href="javaScript:;" @click="handleSelectChange(scope.row)">审核</a>
            </template>
          </fa-table-column>
      </fa-table>
    </fa-scrollbar>
    <!-- <fa-city-picker v-model="startDate"></fa-city-picker> -->
    <!--拖放上传文件-->
    <div style="width:500px;height:300px;" v-fa-file-drop='obtainFile'>
      {{file?file.name:''}}
    </div>
  </div>
</template>
<script src="./login.js"></script>
