<template>
  <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <slot name="username">

            </slot>
            <!-- <div>userName : {{ user.id}}</div> -->
            <!-- <template v-if="this.$route.name === 'item'">
                <div>{{ userInfo.id }}</div>
            </template>
            <template v-else>
                <div>{{ userInfo.user }}</div>
            </template> -->
            
          <!-- <router-link :to="`/user/${fetchedItem.user}`">
            {{ userInfo.id }}
          </router-link> -->
          <div class="time">
            {{ userInfo.created }}
          </div>
        </div>
      </div>
</template>

<script>
export default {
computed : {
    userInfo(){
      return this.$store.state.user;
    }
  },
}
</script>

<style>
.user-container{
  display: flex;
  align-item : center;
  padding:0.5rem;
}
.fa-user{
  font-size :2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size:0.7rem;
}
</style>