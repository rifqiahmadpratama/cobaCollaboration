import React, { useEffect , Fragment } from "react";
import { useNavigate } from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    document.title = 'World Recipes';
  },[]);
  
  const navigate = useNavigate()

  return (
    <Fragment>
      <div className="home-page">
      <div className="container col-12 my-5">
        <h5>Recipes</h5>
        <div className="col-12 d-flex landing-page-1">
            <div className="col-6 bg-white">
            <p>col1</p>
            </div> 
            <div className="col-4 d-flex align-items-center">
            <img className="img-promotion" crossOrigin="anonymous" src={require("../../assets/images/home_1.png")} alt="" />
            </div>
            <div className="col-2 bg-warning ">
            </div>
        </div>
        <div className="col-12 d-flex">
            <div className="col-8 bg-white">
            <p>col3</p>
            </div> 
            <div className="col-4 ">
            <p>col4</p>
            </div>
        </div>
        <div className="col-12 d-flex">
            <div className="col-8 bg-warning">
            <p>col1</p>
            </div> 
            <div className="col-4 ">
            <p>col2</p>
            </div>
        </div>
        <div className="col-12 d-flex">
            <div className="col-8 bg-white">
            <p>col3</p>
            </div> 
            <div className="col-4 ">
            <p>col4</p>
            </div>
        </div>
      </div>


      </div>
    </Fragment>
  );
};

export default Home;
