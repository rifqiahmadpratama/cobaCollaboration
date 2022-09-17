import React, { useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up | World Recipes";
  }, []);

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="sign-up-page">
        <div className="container col-12 d-flex">
          <div className="col-6 bg-warning">
            <img className="bg-picture" crossOrigin="anonymous" src={require("../../assets/images/bg.png")} alt="" />
            <img className="icon-picture" crossOrigin="anonymous" src={require("../../assets/icons/icon.png")} alt="" />
          </div>
          <div className="col-6 container text-start align-items-center">
            <form className="container form-sign-up">
              <div className="text-center">
                <h2 className="text-warning">Let’s Get Started !</h2>
                <h6 className="text-muted">Create new account to access all features</h6>
              </div>
              <div className="justify-content-start">
                <label for="name" class="form-label">
                  Name
                </label>
                <input type="name" class="form-control" id="name" placeholder="Enter Name" />
              </div>
              <div>
                <label for="email" class="form-label">
                  Email address
                </label>
                <input type="email" class="form-control" id="email" placeholder="Enter Email address" />
              </div>
              <div>
                <label for="phone" class="form-label">
                  Phone Number
                </label>
                <input type="phone" class="form-control" id="phone" placeholder="08xxxxxxxxxx" />
              </div>
              <div>
                <label for="password" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="password" placeholder="Enter Password" />
              </div>
              <div>
                <label for="confirm_password" class="form-label">
                  Confirmation Password
                </label>
                <input type="confirm_password" class="form-control" id="confirm_password" placeholder="Enter Confirmation Password" />
              </div>
              <div className="d-flex justify-content-start my-2">
                <input classname="form-check-input" type="checkbox" value="" id="agree-user" />
                <label className="form-check-label" for="agree-user">
                  I agree to terms & conditions
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" class="btn btn-warning my-2">
                  Register Account
                </button>
              </div>
              <div className="col-12 d-flex justify-content-center my-2">
                <p text-muted>Already have account?</p>
                <p className="text-warning">Log in Here</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
