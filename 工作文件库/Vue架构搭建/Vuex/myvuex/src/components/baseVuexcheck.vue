<template>
    <div>
        <p>{{count}}</p>
        <p>{{counts}}</p>
        <p>{{count2}}</p>
        <div class="btn1" @click="increment">

        </div>
        <div class="btn2" @click="decrement">

        </div>
    </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
import {MY_MUTATION1} from '../store/mutationTypes'
export default {
    data(){
        return {
            str:'00000'
        }
    },
    methods:{
        increment(){
            console.log(this.$store)
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        },
        decrement(){
            console.log(this.$store)
            this.$store.commit(MY_MUTATION1)
            console.log(this.$store.state.count)
        }
    },
    computed:{
        ...mapState({
            count:state=>state.count,
            counts(state){
                return this.str+state.count
            }
        }),
        ...mapGetters({
            count2:'odd'
        })
    }
        
    // {
    //     count(){
    //         return this.$store.state.count
    //     }
    // }
}
</script>

<style>
    p{
        font-size: 50px;
        color: red;
        font-weight: 700;
    }
    .btn1{
        width: 100px;
        height: 100px;
        background: red;
    }
    .btn2{
        width: 100px;
        height: 100px;
        background: greenyellow;
    }
</style>


