import React from "react";
import "./Services.js";

import Card from "./Card";
import Data3 from "./ApiData3";

const Services = () => {
  return (
    <div>
      <h1 className="text-center text-primary mt-4">Our Services</h1>

      <div className="container-fluid bg-color">
        <div className="container text-center mt-4">
          <div className="row justify-content-center align-items-center g-2">
            {Data3.map((values) => (
              <div
                key={values.id}
                className="col-xs-12  col-md-5 col-xl-4   my-4"
              >
                <Card title={values.title} image={values.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
