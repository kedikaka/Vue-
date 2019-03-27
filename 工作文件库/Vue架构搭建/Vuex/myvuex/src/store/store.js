import Vue from 'vue'
import Vuex from 'vuex'
import {MY_MUTATION1} from './mutationTypes'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment:state=>state.count++,
        [MY_MUTATION1]:state=>state.count--
    },
    getters:{
        odd:(state)=>{
            return state.count%2 ? state.count:''
        }
    }
})