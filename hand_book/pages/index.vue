<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
       <v-btn block color="primary" @click="addPost = true">
    ADD POST
  </v-btn>

  <postDialogModal :addPost="addPost" @close="closeAddPost"/>
    
  <commentBox />
    
    </v-col>
  </v-row>
</template>

<script>
import commentBox from '~/components/commentBox'
import postDialogModal from '~/components/postDialogModal'

export default {
  components:{
    commentBox,
    postDialogModal
  },
  data: ()=>({
    addPost: false,
  }),

  mounted(){
    this.$nextTick(()=>{
      const check = JSON.parse(localStorage.getItem("post"))
       this.$newPost.addAllPost(check)
    })
  },

  methods:{
    closeAddPost(){
      this.addPost = false
    }
  }
}
</script>

<style>
 
</style>
