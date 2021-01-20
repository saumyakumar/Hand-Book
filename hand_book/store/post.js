export const state = () => ({
    post: [],
})

export const mutations = {
    addNewPost(state,message){
        const postData = JSON.parse(localStorage.getItem('post')) || []
        const eachPost = {
            id: postData.length + 1,
            post: message,
            comment: [],
            recent: null
        } 
        postData.push(eachPost)
        state.post = postData
        localStorage.setItem('post',JSON.stringify(postData))
    },
    addNewComment(state,payload){
        const postData = JSON.parse(localStorage.getItem('post')) || []
        if(postData){
            for(let i=0;i<postData.length;i++){
                if(postData[i].post === payload.message){
                    postData[i].comment.push(payload.comt)
                }
            }
        }
        state.post = postData
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