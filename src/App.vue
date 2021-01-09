<template>
  <v-app>
  
    <v-main class="main">
 <Dashboard/>
    </v-main>
    
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard';
export default {
  name: 'App',

  components:{
    Dashboard,
  },


  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>