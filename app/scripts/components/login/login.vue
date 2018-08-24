<template>
  <div class="center">
    <img src="./../../../images/logo.png">
    <h1>hello VUE</h1>
     <fa-button @click="clickAll(12)">点击</fa-button>
    </br>
    <fa-date-picker label='开始时间' v-model="startDate" color='#fbb900'>
      <i class="fa-icon-date" slot="left"></i>
    </fa-date-picker>
    </br>
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
        1212{{isVisible}}
      </div>
    </fa-card>
  <br/>
  <fa-dialog title="自定义标题" width='800' height='154' :visible='isVisible' @beforeClose='isVisible=false'>
      <fa-table :data='dataMessage' :header-cell-style="{background:'#ecf5ff'}" border tableCenter  cell-style="padding:7px" @selection-change="handleSelectChange">
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
  </fa-dialog>
  <br/>
  <fa-input type='text' v-model="userName" label='用户名'  maxlength='500'>
    <i class="fa-icon-search" slot="right"></i>
  </fa-input>
  <br/>
  <fa-select v-model="selectName" label='案件状态'>
    <fa-option label='张三' value='1'></fa-option>
    <fa-option label='李四' value='2'></fa-option>
    <fa-option label='王五' value='3'></fa-option>
    <fa-option label='赵六' value='4'></fa-option>
    <fa-option label='杨幂' value='5'></fa-option>
    <fa-option label='赵丽颖' value='6'></fa-option>
    <fa-option label='林志玲' value='7'></fa-option>
    <fa-option label='陈道明' value='8'></fa-option>
  </fa-select>
  <br/>
  <fa-upload @upload='uploadFile'
            @deleteFile='deleteFile'
            @downloadFile='downloadFile'
            :limit='4'
            :fileList='fileList'>
    <fa-button><i class="fa-icon--left fa-icon-upload"></i>上传</fa-button>
  </fa-upload>
  <br/>
  <fa-progress :percentage='percentage'  :stroke-width='6' color='#67c23a'></fa-progress>
  <br/>
      <fa-table :data='dataMessage' :header-cell-style="{background:'#ecf5ff'}" border tableCenter  cell-style="padding:7px" @selection-change="handleSelectChange">
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
    <!-- <fa-city-picker v-model="startDate"></fa-city-picker> -->
    <!--树形菜单-->
    <fa-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick" style="width:200px"></fa-tree>
    <!--拖放上传文件-->
    <div style="width:500px;height:300px;" v-fa-file-drop='obtainFile'>
      {{file?file.name:''}}
    </div>
  </div>
</template>
<script src="./login.js"></script>
