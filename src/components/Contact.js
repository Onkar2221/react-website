import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center  text-primary  mt-4">Contact Us</h1>
      <div className="container">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Mobile Number:
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputMobileNumber"
              placeholder="Enter Mobile Number"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputemail"
              placeholder="Enter Your Email"
            />
          </div>

          <button type="submit" className="btn btn-primary m-3">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
