import React, { Component } from 'react';
import './contact.css';
class Contact extends Component {
  render() {
    return (
      <div className="Contact1 py-5">
        <div className="container contact my-5">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info mt-4">
                <img className="mb-4" src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"></img>
                <h2 className="my-4">Contact Us</h2>
                <h4>We would love to hear from you !</h4>
              </div>
            </div>
            <div className="col-md-9 text-left">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Contact;