<template>
  <div>
      <!-- <div v-for="user in this.$store.state.news" v-bind:key="user.title">
          {{ user.title }}
      </div> -->
      <p v-for="item in this.$store.state.news" v-bind:key="item.title">
          <a v-bind:href="item.url">
              {{ item.title }}
          </a>
          <small>
              {{ item.time_ago}} by 
              <router-link v-bind:to="`/user/${item.user}`">
                  {{ item.user }}
              </router-link>
          </small>
      </p>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js'

export default {
 created(){

     this.$store.dispatch('FETCH_NEWS');
    //  var vm= this;

    //  //1
    //  fetchNewsList()
    //     .then(function(response){
    //         console.log(response);

    //         //2
    //         vm.users =  response.data;
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })   
 }
}
</script>

<style>

</style>