<template>
    <li>{{val.txt}}
        <button @click="fn($event,status[0])" v-if="val.status=='进行中'?false:true" >进行中</button>
        <button @click="fn($event,status[1])" v-if="val.status=='已完成'?false:true" >已完成</button>
        <button @click="fn($event,status[2])" v-if="val.status=='已删除'?false:true" >已删除</button>
    </li>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {
            status:["进行中","已完成","已删除"]
        }
    },
    props:["val","ind"],
    methods: {
        fn(e,status){
            this.update({ind:this.val.id,opt:status});
        },
        ...mapActions(["update"])
    },
}
</script>
<style scoped>
    li{
        list-style: none;
        border-bottom:1px dashed #ccc;
    }
    button{
        float: right;
        border:none;
    }
</style>

