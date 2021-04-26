<template>
  <div>
      <!-- <div v-for="item in fetchedAsk" v-bind:key="item.title">{{ item.title }}</div>
      </div> -->
      <p v-for="item in fetchedAsk" v-bind:key="item.title">
          <!-- <a v-bind:href="item.url">
              {{ item.title }}
          </a> -->
          <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
          </router-link>
          <small>{{ item.time_ago}} by {{ item.user }}</small>
      </p>
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