<template>
     <v-row class="mx-auto text-center">
       <v-col cols="12" sm="4" class="mx-auto">
        <v-text-field
          v-model="email"
          placeholder="Enter your email"
          required
          outlined>
        </v-text-field>
        <v-btn
          outlined
          rounded
          text
          color="primary"
          @click="submit"
        >
          Login
        </v-btn>
       </v-col>
     </v-row>
</template>

<script>
export default {
  layout: 'blank',
  data(){
    return {
    email: null
    }
  },

  methods:{
    submit(){
      localStorage.setItem('userid',JSON.stringify(this.email))
      const postData = JSON.parse(localStorage.getItem('post'))
      if(postData){
        if(postData[this.email]){
          this.$router.push('/')
        } else{
          postData[this.email] = []
          localStorage.setItem('post',JSON.stringify(postData))
          this.$router.push('/')
        }
      }  else{
        const postData = {}
        postData[this.email] = []
        localStorage.setItem('post',JSON.stringify(postData))
        this.$router.push('/')
      }
    }
  }

}
</script>
