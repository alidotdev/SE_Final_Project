import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div class="container">
      <form>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Country"
            name="country"
            id="country"
          ></input>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              id="first-name"
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              name="last-name"
              id="last-name"
            ></input>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            name="address"
            id="address"
          ></input>
        </div>
        <div>
          <div>
            <input type="text" placeholder="City" name="city" id="city"></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Postal Code"
              name="code"
              id="code"
            ></input>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            name="number"
            id="number"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
