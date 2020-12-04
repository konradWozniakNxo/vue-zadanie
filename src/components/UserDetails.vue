
<template>
  <v-card
  class="mx-auto"
  max-width="1100"
  >
    <div v-for="address in list" v-bind:key="address">
      <div>{{address.street}}</div>
      <div>{{address.suite}}</div>
      <div>{{address.city}}</div>
      <div>{{address.zipcode}}</div>
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
      return this.$route.params.id;
    }
  },
  
  mounted()
   {
     Vue.axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`).then((resp)=> {
      this.list = resp.data;
      console.warn(resp.data);   
     })
   },
}
</script>

<style>
.lista{
  margin-top: 25px;
}
</style>