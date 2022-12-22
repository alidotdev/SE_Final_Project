import React from "react";
import { useNavigate, Link } from "react-router-dom";
import MainTitle from "../Component/MainTitle";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPosts , getPostsByEmail } from "../actions/posts";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const fetchUsers = useDispatch();
  const fetchUsersByEmail = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [user, setUser] = useState({ Email: "", Password: "" });

  useEffect(() => {
    fetchUsers(getPosts());
  }, []);
  function validateUser() {
    let flag = false
    let checkEmail = false
    if (user.Email == "admin@gmail.com" && user.Password == "admin123") {
      flag = true
      navigate("/ManageProducts");
    } else {
      posts[0]?.map((users) => {
        if(users.Email == user.Email && users.Password == user.Password){
          flag = true
          fetchUsersByEmail(getPostsByEmail(user.Email))
          navigate("/" )
        }
        else if (users.Email == user.Email && users.Password != user.Password){
          flag = true
          checkEmail = true
        }
      });
    }
    if(flag == false){
      alert("Wrong email and Password")
    }
    if(checkEmail == true){
      alert("You have entered wrong Password for Email " + user.Email)
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{ marginLeft: "90rem" }}>
          <Link id="Link" to="/">
            <i
              style={{
                fontSize: "1.3rem",
                marginTop: "4rem",
                marginRight: "2rem",
              }}
              className="fa fa-home"
              aria-hidden="true"
            ></i>
          </Link>
        </div>
        <MainTitle />
        <div className="body-container">
          <div className="center">
            <form onSubmit={validateUser}>
              <div className="txt_field">
                <input
                  type="text"
                  value={user?.Email}
                  onChange={(e) => setUser({ ...user, Email: e.target.value })}
                  required
                />
                <span></span>
                <label>Username</label>
              </div>
              <div className="txt_field">
                <input
                  type="password"
                  value={user?.Password}
                  onChange={(e) =>
                    setUser({ ...user, Password: e.target.value })
                  }
                  required
                />
                <span></span>
                <label>Password</label>
              </div>
              <div className="pass">Forgot Password?</div>
              <input type="submit" value="Login" ></input>
              <div className="signup_link">
                Not a member? <Link to="/SignUp">Signup</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
