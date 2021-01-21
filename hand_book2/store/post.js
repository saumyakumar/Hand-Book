export const state = () => ({
    post: [],
})

export const mutations = {
    addNewPost(state,message){
        const postData = JSON.parse(localStorage.getItem('post')) || []
        const userId = JSON.parse(localStorage.getItem('userid'))
        const eachPost = {
            id: postData.length + 1,
            post: message,
            comment: [],
            recent: null
        }
        postData[userId].push(eachPost)
        state.post = postData[userId]
        localStorage.setItem('post',JSON.stringify(postData))
    },
    addNewComment(state,payload){
        const postData = JSON.parse(localStorage.getItem('post')) || []
        const userId = JSON.parse(localStorage.getItem('userid'))
        const userPosts = postData[userId]
        if(postData){
            for(let i=0;i<userPosts.length;i++){
                if(userPosts[i].post === payload.message){
                    userPosts[i].comment.push(payload.comt)
                }
            }
        }
        state.post = postData[userId]
        localStorage.setItem('post',JSON.stringify(postData))
    },
    addAllPost(state,message){
        state.post = message
    }
}

export const getters = {
    getPost(state){
       return state.post
    }
}
