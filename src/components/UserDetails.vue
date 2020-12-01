
<template>
  <v-card
  class="mx-auto"
  max-width="1100"
  >
    <div v-for="address in list" v-bind:key="address">
      {{address.street}}
      {{address.suite}}
      {{address.city}}
      {{address.zipcode}}
    </div>
  </v-card>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'UsersList',
    data(){
     return {list:[]}
   },
    
  computed: {
    user() {
      return this.$route.params.user;
    }
  },
  
  watch: {
    user() {
      this.$axios.get(`https://jsonplaceholder.typicode.com/users/${this.user}`).then((resp)=> {
          this.list = resp.data;
          console.log('1');
      })
    }
  },

  mounted()
   {
     Vue.axios.get(`https://jsonplaceholder.typicode.com/users/1`).then((resp)=> {
      this.list = resp.data;
      console.warn(resp.data);   
      console.log('2');
     })
   },
}
</script>

<style>
.lista{
  margin-top: 25px;
}
</style>