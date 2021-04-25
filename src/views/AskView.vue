<template>
  <div>
      <div v-for="item in fetchedAsk" v-bind:key="item.title">{{ item.title }}</div>
      </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js'
import { mapGetters } from 'vuex';
export default {

    computed:{
        ...mapGetters([
            'fetchedAsk'
        ]),
        // ...mapGetters({
        //     fetchedAsk: 'fetchedAsk'
        // }),
        // ...mapState({
        //     ask : state => state.ask
        // })
    },
    created(){

        this.$store.dispatch('FETCH_ASK');
        // var vm= this;
        // fetchAskList()
        //     .then(function(response){
        //         vm.ask =  response.data;
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     })   
 }
}
</script>

<style>

</style>