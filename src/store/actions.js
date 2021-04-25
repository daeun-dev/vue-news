import { fetchAskList, fetchJobsList, fetchNewsList } from '../api/index.js';

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
    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(({data}) => {
            commit('SET_JOBS', data);
           // this.state.news = response.data;
        })
        .catch(error =>{
            console.log(error);
        });
    },
    FETCH_ASK(context){
        fetchAskList()
        .then(response =>{
            context.commit('SET_ASK', response.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}