<template>
  <v-card
  class="mx-auto"
  max-width="1100"
  >
  <v-list-item class="lista">
    <v-list-item-content>
      <v-list-item-title class="font-weight-bold"><v-row id="row" justify="space-between">Lista użytkowników<v-btn>Dodaj</v-btn></v-row></v-list-item-title>
        <v-simple-table>
          <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                  Lp
              </th>
              <th class="text-left">
                  Imie i nazwisko
              </th>
              <th class="text-left">
                  Login
              </th>
                <th class="text-left">
                  E-mail
              </th>
              <th class="text-left">
                  Numer telefonu
              </th>
              <th class="text-left">
                  Nazwa firmy
              </th>
              <th class="text-left">
                  Usuń
              </th>
            </tr>
          </thead>
            <tbody>
              <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td><router-link :to="{ name: 'user', params: { id:item.id }}">{{item.name}}</router-link></td>
                <td>{{item.username}}</td>
                <td>{{item.email}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.company.name}}</td>
                <td>
                  <template>
                    <v-row justify="center">
                      <v-dialog
                        v-model="dialog"
                        width="600px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                          >
                          <v-icon color="darken-2">mdi-arrow-left</v-icon></v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Czy na pewno usunać użytkownika</span>
                          </v-card-title>
                          <v-card-text>
                          {{item.name}}
                          </v-card-text>      
                          <v-alert
                            dense
                            border="left"
                            type="warning"
                          >
                            Zostaniesz wylogowany i utracisz dostęp do systemu
                          </v-alert>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="grey darken-1"
                              text
                              @click="dialog = false"
                            >
                              Anuluj
                            </v-btn>
                            <v-btn
                              color="orange darken-1"
                              text
                              @click="dialog = false"
                            >
                              Usuń
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </template>
                </td>
              </tr> 
            </tbody>
          </template>
        </v-simple-table>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import Vue from 'vue';

export default {
   name: 'UsersList',
   data(){
     return{list:undefined} 
   },
   mounted()
   {
     Vue.axios.get('https://jsonplaceholder.typicode.com/users')
     .then((resp)=>{
       this.list=resp.data;
       console.warn(resp.data)
     })
   }
}
</script>

<style>
.lista{
  margin-top: 25px;
}
#row{
margin-right:0px;
margin-left:0px;

}
</style>

