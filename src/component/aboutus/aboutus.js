import React, { Component } from 'react';
import './aboutus.css';
class Aboutus extends Component {
  render() {
    return (
      <div className="home">
        <section className="aboutus py-5">
          <div className="container py-5 ">
            <h2 className="headsec ">About Us</h2>
            <div className="row my-5  text-left">
              <div className="col-lg-4  text-left">
                <img src="../image/wr1.jpg"></img>
              </div>
              <div className="col-lg-4 px-3">
                <p className="name">Who We Are</p>
                <p className="job p-0">Air care was established in 1990 by John Britto and Zat Maxwell in Newyork, United States. John and Zat continue to manage the company today and take pride in providing a family environment for all of our employees. Are very hands-on in all aspects</p>
                <p className="name">What We Do</p>
                <p className="job p-0">Our company provides a full spectrum of work of any level of complexity. Our team consists of highly qualified professionals, who have been in the industry for no less than 6 years. We have gained extensive experience while solving the most complex technical.</p>

              </div>
              <div className="col-lg-4 p-4 border">
                <p className="name">24/7 Customer Care</p>
                <p className="job p-0">For Emergency Service</p>
                <hr></hr>
                  <p className="num">1800-456-789</p>
                  <p className="job p-0">We can provide expert 24 hour Emergency
                                Service, Contact when you need it!.</p>
                  <p className="name">For queries:</p>
                  <p className="job" ><span className="aboutspan"> Tel:</span> (+321) 123-45-678</p>
                  <p className="job"><span >Email:</span> Mailus@Aircare.com</p>
                </div>
              </div>
            </div>
      </section>
        </div>
        );
      }
    }
export default Aboutus ;