<template>
    <div>
        <input type="text" v-model="txt" @keyup.enter="fn">
        <button @click="fn">添加</button>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
export default {
    data(){
        return {
           txt:"",
        }
    },
    methods: {
        fn(){
            this.add({txt:this.txt,status:"进行中"});
            this.txt="";
        },
        ...mapActions(["add"])
    },
    
}
</script>
<style scoped>
    div{
        border:1px solid #ccc;
        padding:10px;
        margin:10px;
        width:80vw;
        height: auto;
    }
</style>
