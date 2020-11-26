 <template>
  <v-card
    height="100vh"
    width="256"
    class="mx-auto"
    style="z-index:0;"
  >
    <v-expansion-panels flat>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header>
          Administracja 
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Użytkownicy
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
<script>
  export default {
    name: 'LeftList',
  }
</script>
