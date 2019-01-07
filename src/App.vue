<template>
  <div id="app">
    <todolist></todolist>
  </div>
</template>

<script>
import Vue from 'vue';
import todolist from './components/todolist.vue';
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{todolist}
}
</script>

<style scoped>
  #app{
    height: 80vh;
  }
</style>
