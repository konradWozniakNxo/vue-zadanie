
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
export default {
  data () {
    return {
    }
  },

  computed: {
    list() {
    return this.$store.state.list
    },
  },

  mounted() {
    this.$store.dispatch("getListDetails", { id: this.$route.params.id});   
  },
}
</script>

<style>
.lista{
  margin-top: 25px;
}
</style>