import React, { Component } from 'react';

/* Components */
import Input from "../Input/Input";
import Result from "../Result/Result";
import Saved from "../Saved/Saved";

/* Stylesheet */
import "../../style.css";

/* Others */
import API from "../../utils/API"
import axios from 'axios';

class Home extends Component {
    
    state = { 
        searchArticles : [],
        savedArticles: []
    };

    componentDidMount() {
        this.loadArticles();
    }

    async loadArticles() {
        const result = await API.getArticlesFromDB();
        this.setState({savedArticles: result.data});
    }

    findArticles = () => {
        const 
            API_KEY = process.env.NYT_API_KEY || "6c18b0a0124c4b8dac53ce2bfff8a233",
            query = document.getElementById("topicInput").value,
            begin_date = document.getElementById("startYearInput").value,
            end_date = document.getElementById("endYearInput").value,
            regex = /^(185[2-9]|18[6-9][0-9]|19[0-9][0-9]|200[0-9]|201[0-8])(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

        let
            NYT_API = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + API_KEY + "&q=" + query;

        if (begin_date !== "" && begin_date.match(regex)){ 
            NYT_API += "&begin_date=" + begin_date;
        }
        else if (begin_date !== "" && !begin_date.match(regex)) {
            document.getElementById("syIF").classList.add("incorrectFormat");
        }

        if (end_date !== "" && !end_date.match(regex)){
            NYT_API += "&end_date=" + end_date;
        }
        else if (end_date !== "" && !end_date.match(regex)) {
            document.getElementById("eyIF").classList.add("incorrectFormat");
        }

        if (query !== "") {
            document.getElementById("topicIF").classList.remove("incorrectFormat");
            document.getElementById("syIF").classList.remove("incorrectFormat");
            document.getElementById("eyIF").classList.remove("incorrectFormat");
            axios.get(NYT_API)
                .then(response => {
                    this.setState(
                        {searchArticles : []}
                    );
                    let searchedArticles = [];
                    for (let i = 0; i < response.data.response.docs.length; i++){
                        searchedArticles.push(response.data.response.docs[i]);
                    }
                    this.setState( {searchArticles : searchedArticles} );
                })
        }
        else {
            document.getElementById("topicIF").classList.add("incorrectFormat");
        }
    }

    addToFavorites = article => {
        API.postArticleToDB({
            title: article.title,
            summary: article.summary,
            writer: article.writer,
            date: article.pub_date,
            url: article.link
        })
        
        this.loadArticles();
    }

    deleteFromFavorites = article => {
        API.removeArticleFromDB(article);
    
        this.loadArticles();
    }

    render() { 
        return (
            <div className="row">
                <div className="col s10 m3 offset-s1 offset-m1 box" id="search">
                    <div className="header">
                        <h4 className="center"> Find an Article that Interests You! </h4>
                    </div>
                    <div id="inputs">
                        <Input key="TOPIC" id="topicIF" inputID="topicInput" inputName="Topic"/>
                        <Input key="START YEAR" id="syIF" inputID="startYearInput" inputName="Start Year Input (YYYYMMDD)" />
                        <Input key="END YEAR" id="eyIF" inputID="endYearInput" inputName="End Year Input (YYYYMMDD)" />
                        <button className="btn" id="searchButton" onClick={this.findArticles}> Search </button>
                    </div>
                </div>
                <div className="col s10 m6 offset-s1 offset-m1 box" id="results">
                    <div className="header">
                        <h4 className="center"> Your Results : </h4>
                    </div>
                    <ul>
                        {this.state.searchArticles.map(article => 
                            <li>
                                <Result
                                    id={article._id}
                                    key={article._id}
                                    
                                    addFavorite={this.addToFavorites}

                                    link={article.web_url}
                                    pub_date={article.pub_date} 
                                    summary={article.snippet}
                                    title={article.headline.main}
                                    writer={article.byline.original} 
                                />
                            </li>
                        )}
                    </ul>
                </div>
                
                <div className="col s10 offset-s1 box">
                    <div className="header">
                        <h4 className="center"> Saved Articles : </h4>
                    </div>
                    {this.state.savedArticles.map(article => 
                        <Saved
                            id={article._id}
                            key={article._id} 

                            delFavorite={this.deleteFromFavorites}
                            
                            link={article.url}
                            pub_date={article.date} 
                            summary={article.summary}
                            title={article.title}
                            writer={article.writer} 
                        />
                    )}
                </div>
            </div>
        );
    }
}
 
export default Home;