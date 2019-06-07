import React, { Component } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import './navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="col-lg-3 float-left pt-5">
            <img className="logoimg" src="../image/logo.png" alt=""></img>
          </div>
          <div className="col-lg-9 d-flex row">
            <div className="col-lg-12 pt-3">
              <p className="plite">Welcome to Repairplus Experts, Theme for Repair Shops</p>
            </div>
            <div className="col-lg-4 ">
              <p className="pblue">Call Us Now</p>
              <p className="plite">+1-888-987-6543</p>
            </div>
            <div className="col-lg-4">
              <p className="pblue">121 Park Drive</p>
              <p className="plite">Varick St, Newyork 1006</p>
            </div>
            <div className="col-lg-4 ">
              <p className="pblue">Mon - Satday</p>
              <p className="plite">09.00am to 18.00pm</p>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-sm p-0 sticky-top">
          <div className="container">
            <ul className="navbar-nav py-1 text-uppercase sticky-top">
              <li className="nav-item">
                <NavLink className="nav-link text-light mx-1" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light mx-1" exact to="/aboutus">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light mx-1" exact to="/News">News</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light mx-1" exact to="Contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light mx-1" exact to="#">Reviews</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light mx-1" exact to="#">Specials & Rebate</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light mx-1" exact to="#">Blog</NavLink>
              </li>
            </ul>
            <button className="float-right px-3">Make an Appoinment</button>
          </div>
        </nav>




      </div>
    );
  }
}
export default Navbar;