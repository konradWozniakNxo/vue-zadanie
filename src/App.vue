<template>
  <v-app>
    <v-toolbar style="z-index:1;" class="grey lighten-3">
      <v-toolbar-title width="100vw" class="grey lighten-2 black--text">Logo</v-toolbar-title>     
    </v-toolbar>
    <v-main class="grey lighten-4" >
      <v-container fluid class="grey lighten-5" style="padding:0px;">
      <v-row no-gutters>
        <v-col cols="1" >
          <LeftList name="Użytkownicy"/>
        </v-col>
        <v-col cols="11">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LeftList from './components/LeftList';
export default {
  name: 'App',

  components: {
    LeftList,
  },

  data: () => ({
    //
  }),
};
</script>
