<template>
  <div class="center">
    <img src="./../../../images/logo.png">
    <h1>hello VUE</h1>
    <button @click="clickAll()">点击</button>
    <fa-date-picker v-model="startDate"></fa-date-picker>

    <!-- <fa-city-picker v-model="startDate"></fa-city-picker> -->
  </div>
</template>
<script src="./login.js"></script>
