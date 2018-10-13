import axios from "axios";

export default {

    postArticleToDB: (articleData) => {
        console.log(articleData);
        return axios.post("/api/articles", articleData);
    },

    removeArticleFromDB: (articleData) => {
        console.log(articleData);
        return axios.delete(`/api/article/${articleData.id}`)
    },
    
    getArticlesFromDB: () => {
        return axios.get("/api/articles");
    }
};