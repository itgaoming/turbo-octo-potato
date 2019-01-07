<template>
    <div>
        <ul>
           {{status}}
            <item v-for="(val,ind) of list" :key="ind" :val="val" :ind="ind" ></item>
        </ul>
    </div>
</template>
<script>
import item from './item.vue';
export default {
    props:["status","list"],
    data(){
        return {}
    },
    components:{
        item
    }
}
</script>
<style scoped>
    ul{
        border:1px solid #666;
        height:300px;
        overflow-y: auto;
        padding: 10px;
        margin:10px;
    }
</style>

