import React from 'react';
import Navbar from './shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Subscription() {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-center fs-1 mt-10" style={{ mt: 4 + 'em' }}>Pricing</h1>
        <p className="text-center fs-6 mt-3">Please check out most effective payment models</p>

        <div className="row text-center justify-content-evenly mt-7">
          <div className="card col-sm-5 col-md-3 mb-3 me-3">
            <div className="card-header"><h4 className="card-title">Free</h4></div>
            <div className="card-body p-3">
              <h2 className="card-title">₹0 / mo</h2>
              <ul className="list-unstyled">
                <li>All Listing Related to Internship and Jobs Accessible</li>
              </ul>
              
              <a href="#" className="btn btn-outline-primary"><Link to="/signup" >Signup</Link></a>
            </div>
          </div>
          <div className="card col-sm-10 col-md-3 mb-3 me-3">
            <div class="card-header"><h4 class="card-title">Enterprise</h4></div>
            <div class="card-body">
              <h2 class="card-title">₹150 / mo</h2>
              <ul class="list-unstyled">
                <li>All Listing Related to Internship and Jobs Accessible</li>
                <li>Hackatons Listing Accessible</li>
                <li>Phone and email support</li>
              </ul>
              <a href="#" className="btn btn-primary">Contact us</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Subscription;