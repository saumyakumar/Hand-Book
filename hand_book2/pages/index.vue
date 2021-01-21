<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
       <v-btn block color="primary" @click="addPost = true">
    ADD POST
  </v-btn>

  <postDialogModal :addPost="addPost" @close="closeAddPost"/>

  <PostBox />

    </v-col>
  </v-row>
</template>

<script>
import PostBox from '~/components/postBox'
import postDialogModal from '~/components/postDialogModal'

export default {
  components:{
    PostBox,
    postDialogModal
  },
  data: ()=>({
    addPost: false,
  }),

  mounted(){
    this.$nextTick(()=>{
      const check = JSON.parse(localStorage.getItem("post"))
      const userId = JSON.parse(localStorage.getItem('userid'))
      this.$newPost.addAllPost(check[userId])
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
