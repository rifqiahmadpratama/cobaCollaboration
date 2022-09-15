import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  useEffect(() => {
    document.title = "Sign Up | World Recipes";
  }, []);

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="sign-in-page">
      <div className="container col-12 d-flex">
          <div className="col-6 bg-warning">
            <img className="bg-picture" crossOrigin="anonymous" src={require("../../assets/images/bg.png")} alt="" />
            <img className="icon-picture" crossOrigin="anonymous" src={require("../../assets/icons/icon.png")} alt="" />
          </div>
          <div className="col-6 container text-start align-items-center">
            <form className="container form-sign-in">
              <div className="text-center">
              <h2 className="text-warning">Welcome</h2>
              <h6 className="text-muted">Log in into your exiting account</h6>
              </div>
              
              <div>
                <label for="email" class="form-label">
                  Email address
                </label>
                <input type="email" class="form-control" id="email" placeholder="Enter Email address" />
              </div>
             
              <div>
                <label for="password" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="password" placeholder="Enter Password" />
              </div>
             
              <div className="d-flex justify-content-start my-2">
                <input classname="form-check-input" type="checkbox" value="" id="agree-user" />

                <label className="form-check-label" for="agree-user">
                  I agree to terms & conditions
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" class="btn btn-warning my-2">
                  Log in Account
                </button>
              </div>
              <div className="col-12 d-flex justify-content-center my-2">
                <p text-muted>Don’t have an account?</p>
                <p className="text-warning"> Sign Up Here</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
