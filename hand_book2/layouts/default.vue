<template>
  <v-app>
    <v-app-bar  fixed app>
      <v-toolbar-title v-text="title" />
      <v-toolbar-title class="ml-3" v-text="userLoggedIn" />
      <v-spacer />
      <v-btn @click="logout" color="primary">Logout</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Handbook of',
      userLoggedIn: null
    }
  },

  mounted(){
    this.userLoggedIn = JSON.parse(localStorage.getItem('userid'))
  },

  methods:{
    logout(){
      localStorage.removeItem('userid')
      this.$router.push('/login')
    }
  }
}
</script>
