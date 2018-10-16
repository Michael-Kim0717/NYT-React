import axios from "axios";

export default {

    postArticleToDB: (articleData) => {
        return axios.post("/api/articles", articleData);
    },

    removeArticleFromDB: (articleData) => {
        return axios.delete(`/api/article/${articleData.id}`)
    },
    
    getArticlesFromDB: () => {
        return axios.get("/api/articles");
    }
};