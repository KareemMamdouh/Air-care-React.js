import React, { Component } from 'react';
import './home.css';
class Home extends Component {
    render() {
        const {items}=this.props;
        let theitem = items.map((item) => {
            return (
                      <div className="col-lg-4" key="{item.id}">
                                <div className="card">
                                    <div className="divimg">
                                        <img src={item.image} className="img img-fluid" alt="..."></img>
                                    </div>
                                    <div className="card-body">
                                        <p className="name">{item.services}</p>
                                        <p className="job">{item.title}</p>
                                    </div>
                                </div>
                            </div>
            )
           
        }); 
        return (
            <div className="home">
                <section>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../image/cover1.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="../image/cover2.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="../image/cover3.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>

                <section className="Air-Care py-5">
                    <div className="container text-center py-5">
                        <h2 className="headsec">Welcome to Air Care</h2>
                        <p className="plite py-3">For 25 years, Air Care, Heating & Air Conditioning Expert has remained a true family owned and operated
                        <br></br>residential and light commercial HVAC company.</p>
                        <div className=" row">
                        {theitem}

                    
                        </div>
                    </div>
                </section>
         </div>
        );
    }
}
export default Home;