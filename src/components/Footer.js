import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#fffff", marginRight: "2rem" }}
            />

            <div>
              <p>Kannur,Kerala</p>
              <h4>India</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fffff", marginRight: "2rem" }}
              />
              1-234-456-7890
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fffff", marginRight: "2rem" }}
              />
              comespace.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed
            cumque optio, perferendis obcaecati laboriosam iusto impedit
            assumenda soluta vel alias consequuntur reprehenderit fuga placeat
            quasi. Laudantium ipsam quaerat quidem"
          </p>
          <div className="social">
           < FaFacebook size={30}
                style={{ color: "#fffff", marginRight: "1rem" }}
               />
           <FaLinkedinIn size={30}
                style={{ color: "#fffff", marginRight: "1rem" }}
              />
           <FaTwitter size={30}
                style={{ color: "#fffff", marginRight: "1rem" }}
               />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
