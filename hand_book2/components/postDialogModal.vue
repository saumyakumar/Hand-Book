<template>
    <v-dialog
      v-model="view"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">New Post</span>
        </v-card-title>
        <v-form ref="addPostData">
        <v-card-text>
             <v-textarea
                v-model="postData"
                solo
                label="post"
            ></v-textarea>
        </v-card-text>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeModal"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addNewPost"
          >
            Post
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {

    props:{
        addPost:{
            type: Boolean,
            required: true
        }
    },

    data: ()=>({
    postData: null,
    view:  false
  }),
  watch:{
      'addPost'(){
          this.view = this.addPost
      }
  },
  methods:{
    addNewPost(){
      this.$newPost.addNewPost(this.postData)
      this.postData = null
      this.closeModal()
    },
    closeModal(){
        this.$emit('close')
        this.$refs.addPostData.reset()
    }
  }
}
</script>
