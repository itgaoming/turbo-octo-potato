<template>
    <div>
        todolist
        <inp></inp>
        <list :status="'进行中'" :list="list1('进行中')"></list>
        <list :status="'已完成'" :list="list1('已完成')"></list>
        <list :status="'已删除'" :list="list1('已删除')"></list>
    </div>
</template>
<script>
import Vue from 'vue';
import inp from './input.vue';
import list from './list.vue';
import {mapState} from 'vuex';
export default {
    
    data(){
        return {
            
        }
    },
    components:{inp,list},
    computed: {
        ...mapState(["list"]),
        list1(){
            var listarr=this.list;
            return function(status){
                let currList=listarr.filter((ele) => {
                    return ele.status===status;
                })
                return currList;
            }
        }
    }
}
</script>
<style scoped>
    div{
        
        
        border:1px solid #000
    }
</style>

