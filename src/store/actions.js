import { 
    fetchAskList, 
    fetchJobsList, 
    fetchNewsList,
    fetchUserInfo,
    fetchCommentItemInfo } from '../api/index.js';

export default{
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response);
            context.commit('SET_NEWS', response.data);
           // this.state.news = response.data;
        })
        .catch(error =>{
            console.log(error);
        });
    },
    //destructuring
    FETCH_JOBS({ commit }) {
        fetchJobsList()
        .then(({data}) => {
            commit('SET_JOBS', data);
           // this.state.news = response.data;
        })
        .catch(error =>{
            console.log(error);
        });
    },
    FETCH_ASK({ commit }){
        fetchAskList()
        .then(({data}) =>{
            commit('SET_ASK', data);
        })
        .catch(error=>{
            console.log(error);
        });
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data);
           // this.state.news = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ITEM({ commit }, id){
        fetchCommentItemInfo(id)
        .then(({data}) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        });
    }
}