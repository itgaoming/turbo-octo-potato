import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        list:[{txt:"hello",id:1,status:"进行中"}]
    },
    mutations:{
        addList(state,txtObj){
            txtObj.id=new Date().getTime();
            state.list.push(txtObj);
        },
        update(state,payload){
            var ind=state.list.findIndex(ele=>{
                return ele.id==payload.ind;
            })
            state.list[ind].status=payload.opt;
        }
    },
    actions:{
        add({commit},txtObj){
           
            commit("addList",txtObj);
        },
        update({commit},payload){
            commit("update", payload);
        }
    },
    getters:{

    }
})
export default store;