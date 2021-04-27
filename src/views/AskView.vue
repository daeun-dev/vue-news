<template>
  <div>
      <list-item></list-item>
      <!-- <ul class="news-list">
          <li v-for="item in fetchedAsk" v-bind:key="item.title" class="post">
              <div class="points">
              {{ item.points }}
              </div>
              
              <div>
                  <p class="news-title">
                       <router-link v-bind:to="`/item/${item.id}`">
                            {{ item.title }}
                        </router-link>
                  </p>
                  <small class="l">
                   {{ item.time_ago}} by 
                    <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                  </small>
              </div>
          </li>
      </ul> -->
  </div>  
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import { fetchAskList } from '../api/index.js'
// import { mapGetters } from 'vuex';
export default {
    components:{
        ListItem
    }

//     computed:{
//         ...mapGetters([
//             'fetchedAsk'
//         ]),
//         // ...mapGetters({
//         //     fetchedAsk: 'fetchedAsk'
//         // }),
//         // ...mapState({
//         //     ask : state => state.ask
//         // })
//     },
//     created(){

//         this.$store.dispatch('FETCH_ASK');
//         // var vm= this;
//         // fetchAskList()
//         //     .then(function(response){
//         //         vm.ask =  response.data;
//         //     })
//         //     .catch(function(error){
//         //         console.log(error);
//         //     })   
//  }
}
</script>
