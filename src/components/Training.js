import React from "react";
import "./TrainingStyles.css";
import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";
import { Link } from "react-router-dom";
const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quos quidem accusamus doloribus ipsam rerum molestiae saepe qui
          voluptatem culpa. Dolorem voluptate suscipit dolore necessitatibus
          quas? Ea illum rem tenetur.
        </p>
        <Link to="/contact">
          
          <button className="btn">Contact</button>
        </Link>
      </div>
      
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} alt="" className="img" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} alt="" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
