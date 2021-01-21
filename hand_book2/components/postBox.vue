<template>
<div>
    <v-card v-for="post in newPostData" :key="post.id" class="my-4">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <h2 class="post-color">{{post.post}}</h2>
          </v-col>
          <v-col cols="12">
            <h2>Comments:</h2>
            <h5 v-for="cmt in post.comment" :key="cmt" class="post-color">{{cmt}}</h5>
          </v-col>
        </v-row>
       <v-card-actions>
      <v-textarea
          v-model="post.recent"
          solo
          label="comment"
          rows="3"
      ></v-textarea>
      </v-card-actions>
      <v-btn color="primary" @click="submit(post.post,post.recent)">Comment</v-btn>
      </v-card-text>
    </v-card>
</div>
</template>



<script>
// import {mapGetters} from 'vuex';

export default {
  computed:{
    newPostData(){
      return this.$store.getters["post/getPost"]
    }    
},
methods:{
    submit(postMsg,postCmt){
      this.$newPost.addNewComment(postMsg,postCmt)
    }
}
}
</script>