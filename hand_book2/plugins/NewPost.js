export default ({app, store}, inject) =>{
    inject('newPost',{
        addNewPost(message){
            store.commit('post/addNewPost',message)
        },
        addNewComment(message,comt){
            store.commit('post/addNewComment',{message,comt})
        },
        addAllPost(message){
            store.commit('post/addAllPost',message)
        }
    })
}