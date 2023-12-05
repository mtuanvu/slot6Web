import React from "react";
import "./about.css";
const About = () => {
  return (
    <div>
      <div className="About">
        <div className="Top">
          <h1>About Us</h1>
        </div>
        <div className="Center">
          <div className="Content1">
            <p className="1"></p>
            <h1>
              {" "}
              <span>CEO</span>: Nguyen Thi Hanh
            </h1>
            <h2>The founder is also the general manager director</h2>
          </div>
          <div className="Content2">
            <p className="2"></p>
            <h1>
              <span>CTO</span>: Nguyen Thanh Binh
            </h1>
            <h2>
              10 years of expensive is building a specialized technical team
            </h2>
          </div>
        </div>
        <div className="Bottom">
          <p></p>
          <h1>
            <span>CFO</span>: Nguyen Van Hoa
          </h1>
          <h2>
            5 years of expensive in finacial management of leading enterprise in
            Viet Nam
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
