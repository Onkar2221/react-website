import React from "react";
import "./About.css";
import Card from "./Card";
import Data2 from "./ApiData2";
import about from "../images/about-main.avif";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center my-4">
          <div className="col-xs-12 col-md-6">
            <p className="mt-5">
              There are offices in this list from some of the biggest companies
              in the world, but when it comes to making awesome offices, size
              doesn’t matter. This must be one of the most relaxing offices to
              work in, because you’re half underground, and half above ground,
              with views out into the woods.
            </p>
            <p>
              This is Selgas Cano Office, which was designed by Iwan Baan and is
              situated in a forest, near Madrid, in Spain. This office for
              architects is light and airy, with clean lines and colorful
              details, making it a great place to work from. It’s less about
              awesome fun slides, great food and gaming areas, and more about a
              relaxed environment, away from harsh lighting and big empty rooms.
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src={about} alt="" className="about-img" />
          </div>
        </div>
      </div>

      <h1 className="text-center text-info">Meet Our Team</h1>
      <div className="container-fluid  bg-color">
        <div className="container text-center mt-3">
          <div className="row justify-content-center align-items-center g-2">
            {Data2.map((values) => (
              <div key={values.id} className="col-xs-12 col-sm-6 col-md-4 my-4">
                <Card title={values.title} image={values.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
