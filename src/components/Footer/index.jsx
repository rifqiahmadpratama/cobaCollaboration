import React, { Fragment } from "react";
import './index.css';

const Footer = () => {
  return (
    <Fragment>
      {/* <footer className=''>
    <div className='container '>
        <div className=''> </div>
    <p>test</p>
    </div>

</footer> */}
      <div class="footer-global">
        <footer class="container py-5 border-top">
          <div className="col-12 text-center mb-5">
            <h1><b>Eat, Cook, Repeat</b></h1>
            <h5 className="text-muted">Share your best recipe by uploading here !</h5>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="col-9 d-flex">
              <div className="col text-center ">
                <h6 className="text-muted">Recipes</h6>
              </div>
              <div className="col text-center">
                <h6 className="text-muted">Company</h6>
              </div>
              <div className="col text-center">
                <h6 className="text-muted">Learn more</h6>
              </div>
              <div className="col text-center">
                <h6 className="text-muted">Collaboration</h6>
              </div>
              <div className="col text-end">
                <p className="text-muted">&copy; WorldRecipes</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
