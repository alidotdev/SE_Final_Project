import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createPost } from "../actions/posts";
import { getPosts } from "../actions/posts";
import { useEffect } from "react";
import MainTitle from "../Component/MainTitle";
import { Link } from "react-router-dom";
function SignUp() {
  const fetchUsers = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => {
    fetchUsers(getPosts());
  }, [posts]);
  const [postUser, setPostUser] = useState({
    Email: "",
    Password: "",
    Confrim_Pwd: "",
  });
  const dispatch = useDispatch();
  const SignUpSave = (e) => {
    //get data
    const x = posts[0].map((element) => {
      return element.Email;
    });
    console.log(x);
    const values = [...x.values()];
    const result = values.includes(postUser.Email);
    e.preventDefault();
    if (postUser.Password == postUser.Confrim_Pwd) {
      if (result == false) {
        alert("Successfully signed Up");
        dispatch(createPost(postUser));
      } else {
        alert("User with the same Email Id already exists");
      }
    } else {
      alert("Password must be same");
    }
    e.target.reset();
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        className="container-fluid"
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <MainTitle />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form id="myForm" className="px3-7 py-4" onSubmit={SignUpSave}>
            <div className="form-group" style={{ width: "500px" }}>
              <label>Email address</label>
              <input
                name="Email"
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
                value={postUser.Email}
                onChange={(e) =>
                  setPostUser({ ...postUser, Email: e.target.value })
                }
              />
            </div>
            <div className="form-group" style={{ width: "500px" }}>
              <label>Password</label>
              <input
                name="Password"
                value={postUser.Password}
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
                onChange={(e) =>
                  setPostUser({ ...postUser, Password: e.target.value })
                }
              />
            </div>
            <div className="form-group" style={{ width: "500px" }}>
              <label>Confirm Password</label>
              <input
                name="Confrim_Pwd"
                value={postUser.Confrim_Pwd}
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword2"
                placeholder="Password"
                onChange={(e) =>
                  setPostUser({ ...postUser, Confrim_Pwd: e.target.value })
                }
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="dropdownCheck"
              />
              <label className="form-check-label">Remember me</label>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "black",
                  marginTop: "15px",
                  borderStyle: "none",
                }}
              >
                Sign Up
              </button>
            </div>
            <div className="signup_link">
              Already have an account? <Link to="/Login">Login</Link>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Link id="Link" to="/">
          <i
            style={{
              fontSize: "1.3rem",
              marginTop: "4rem",
              marginRight: "2rem",
            }}
            class="fa fa-home"
            aria-hidden="true"
          ></i>
        </Link>
      </div>
    </div>
  );
}
export default SignUp;
