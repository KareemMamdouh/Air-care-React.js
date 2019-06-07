import React, { Component } from 'react';
import './news.css';
import axios from 'axios';

class News extends Component {
    state={
        news:[]
    }
    componentDidMount(){
        axios.get("https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=548aecfbacf447e4b12499a0c5487a20").then(res=>{
            this.setState({
                news:res.data.articles
            })
        })
    }
    render() {
        return (
                <div className="container text-center py-5">
                        <h2 className="headsec">News</h2>
                        <div className="row">
                             {this.state.news.map(
                               n=>
                                        <div className="col-lg-4" key="{item.id}">
                                            <div className="card">
                                                <div className="divimg">
                                                    <img src={n.urlToImage} className="img img-fluid" alt="..."></img>
                                                </div>
                                                <div className="card-body">
                                                    <p className="name">{n.title}</p>
                                                    <p className="job">{n.description}</p>
                                                </div>
                                            </div>
                                        </div>
                             )}
                </div>
            </div>
        );
    }
}
export default News;