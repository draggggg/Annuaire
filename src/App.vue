
<template>
  
   <v-app>
     <div>
    <v-app-bar
      color="#006A9E"
      dense
      dark
    >

      <v-toolbar-title>
      <v-img 
      lazy-src="/images/logo-mc2i-trans.png"
      max-height="76"
      max-width="76"
      src="/images/logo-mc2i-trans.png"
      ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="ml-14" >
        L'annuaire
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon>mdi-exit-to-app
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
    <v-main>
      <router-view/>
    </v-main>
      <v-bottom-navigation
    :value="value"
  >
  <a>by Ines Guitton</a>
  </v-bottom-navigation>

    
  </v-app>
</template>
 

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #006A9E;
}

body {
	background: #eee !important;	
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #006A9E;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
