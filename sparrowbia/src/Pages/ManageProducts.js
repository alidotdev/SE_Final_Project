import React from "react";
import MainTitle from "../Component/MainTitle";
import FileBase from "react-file-base64";
import { useState } from "react";
import Image from "../Images/PM.webp";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
//import actions
import {
  getSubCatPosts,
  createProducts,
  getProducts,
  deleteProducts,
  updatePost,
  getCollection,
} from "../actions/posts";
const Select = styled.select`
  margin-top: 15px;
  padding: 5px;
  margin-right: 10px;
`;
const Option = styled.option``;
function ManageProducts() {
  const navigate = useNavigate();
  const mail = useSelector((state) => state.posts);
  const dispatchProducts = useDispatch();
  const deleteDispatch = useDispatch();
  const fetchSubCat = useDispatch();
  const fetchCollection = useDispatch();
  const fetchProducts = useDispatch();
  const updateDispatch = useDispatch();
  const prod = useSelector((state) => state.products);
  const posts = useSelector((state) => state.posts);
  const col = useSelector((state) => state.collection);
  const [currentId, setCurrentId] = useState("");
  const [postData, setPostData] = useState({
    Title: "",
    Price: "",
    Description: "",
    Code: "",
    selectedFile: "",
    Category: "Select Options",
    SubCategory: "Select Options",
    Collection: "Select Options",
    Color: "Color",
    Size: "Size",
    Fabric: "Fabric",
  });

  useEffect(() => {
    // console.log(mail);
    // console.log("Mail of admin ", mail[0][0].Email);
    alert('mail');
    // alert(mail === undefined);
    if (mail.length > 0) {
      
      console.log("Successfully logged in as admin");
    } else {
      alert("First Login as admin to get access to this page");
      navigate("/Login");
      // <Navigate to="/Login" replace={true} />
      // history.push('/Login');
    }
  },[]);

  useEffect(() => {
    fetchSubCat(getSubCatPosts());
    fetchCollection(getCollection());
  }, []);
  console.log("select val: ", postData.Color);
  //function to set Categories Option
  function changeValue(target) {
    setPostData({ ...postData, Category: target });
  }
  //for submission and Updation of Products
  function submitProducts(e) {
    e.preventDefault();
    var checkTitle = false;
    var checkCode = false;
    const titleCheck = prod[0].map((x) => {
      return x.Title;
    });
    var codeCheck = prod[0].map((x) => {
      return x.Code;
    });
    for (var i = 0; i < titleCheck.length; i++) {
      if (postData.Title == titleCheck[i]) {
        checkTitle = true;
        break;
      }
    }
    for (var i = 0; i < codeCheck.length; i++) {
      if (postData.Code == codeCheck[i]) {
        checkCode = true;
        break;
      }
    }
    if (currentId == "") {
      if (checkTitle == false && checkCode == false) {
        console.log("Product Data: ", postData);
        dispatchProducts(createProducts(postData));
        alert("Submit Products Successfully");
      } else {
        alert("Product with this title name or Code already exist");
      }
    } else {
      if (checkTitle == false && checkCode == false) {
        updateDispatch(updatePost(currentId, postData));
        alert("Update Successfully");
        document.getElementById("submit-btn").innerHTML = "Add Product";
      }
      else{
        alert("Product with this title name or Code already exist");
      }
      
    }
  }
  //for Validations
  function validatePrice(target) {
    if (target >= 0) {
      setPostData({ ...postData, Price: target });
    } else {
      alert("Price must be in postive range");
    }
  }
  //for Datatable
  useEffect(() => {
    fetchProducts(getProducts());
  }, []);
  console.log("Sub Cat", posts);
  console.log("Products", prod);
  console.log("Collection ", col);
  console.log("Product Getting ", prod);
  //Delete Products
  function delProducts(data) {
    deleteDispatch(deleteProducts(data._id));
  }
  const editHandler = (data) => {
    document.getElementById("submit-btn").innerHTML = "Update";
    console.log(data);
    setPostData(data);
    setCurrentId(data._id);
  };
  
  function LogOut() {
    navigate("/");
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: "10rem" }}>
        <div>
          <img src={Image} style={{ width: "600px", marginTop: "1rem" }} />
        </div>

        <div>
          <MainTitle />
          <div className="tab-content" style={{ marginLeft: "3rem" }}>
            <div className="container-md">
              <form onSubmit={submitProducts}>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <label className="form-label">Product Title</label>
                  <input
                    type="text"
                    id="loginName"
                    className="form-control"
                    value={postData?.Title}
                    onChange={(e) =>
                      setPostData({ ...postData, Title: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="d-grid gap-2 col-12 mx-auto">
                  <label className="form-label">Product Price</label>
                  <input
                    type="text"
                    id="loginPassword"
                    className="form-control"
                    value={postData?.Price}
                    onChange={(e) => validatePrice(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <label className="form-label">Product Code</label>
                  <input
                    type="text"
                    id="loginPassword"
                    className="form-control"
                    value={postData?.Code}
                    onChange={(e) =>
                      setPostData({ ...postData, Code: e.target.value })
                    }
                    placeholder="xxx-xxx-xx"
                  />
                </div>
                <div>
                  <Select
                    onChange={(e) =>
                      setPostData({ ...postData, Color: e.target.value })
                    }
                  >
                    <Option disabled selected>
                      Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Brown</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>Purple</Option>
                  </Select>
                  <Select
                    onChange={(e) =>
                      setPostData({ ...postData, Size: e.target.value })
                    }
                  >
                    <Option disabled selected>
                      Size
                    </Option>
                    <Option>Extra-Small</Option>
                    <Option>Small</Option>
                    <Option>Medium</Option>
                    <Option>Large</Option>
                    <Option>Extra-Large</Option>
                  </Select>
                  <Select
                    onChange={(e) =>
                      setPostData({ ...postData, Fabric: e.target.value })
                    }
                  >
                    <Option disabled selected>
                      Fabric
                    </Option>
                    <Option>Chiffon</Option>
                    <Option>Cotton</Option>
                    <Option>Crepe</Option>
                    <Option>Linen</Option>
                    <Option>Satin</Option>
                    <Option>Silk</Option>
                  </Select>
                </div>
                <div className="dropdown-center d-grid gap-2 col-12 mx-auto">
                  <label className="form-label">Product Category</label>
                  <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {postData?.Category}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item "
                        id="option1"
                        href="#"
                        onClick={(e) => changeValue(e.target.text)}
                      >
                        Men
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        id="option2"
                        href="#"
                        onClick={(e) => changeValue(e.target.text)}
                      >
                        Women
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        id="option3"
                        href="#"
                        onClick={(e) => changeValue(e.target.text)}
                      >
                        Kids
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        id="option4"
                        href="#"
                        onClick={(e) => changeValue(e.target.text)}
                      >
                        Other Accessories
                      </a>
                    </li>
                  </ul>
                </div>

                {postData.Category != "Select Options" && (
                  <>
                    <label className="form-label">Product Sub Category</label>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={postData?.SubCategory}
                      variant="dark"
                    >
                      {posts[0]?.map((a, index) => {
                        return (
                          a?.Category == postData?.Category && (
                            <Dropdown.Item
                              id={index}
                              onClick={(e) =>
                                setPostData({
                                  ...postData,
                                  SubCategory: e.target.text,
                                })
                              }
                            >
                              {a?.title}
                            </Dropdown.Item>
                          )
                        );
                      })}
                    </DropdownButton>
                  </>
                )}
                {postData.SubCategory != "Select Options" && (
                  <>
                    <label className="form-label">Product Collection</label>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={postData?.Collection}
                      variant="dark"
                    >
                      {col[0]?.map((a, index) => {
                        return (
                          a?.Type == postData?.SubCategory && (
                            <Dropdown.Item
                              id={index}
                              onClick={(e) =>
                                setPostData({
                                  ...postData,
                                  Collection: e.target.text,
                                })
                              }
                            >
                              {a?.title}
                            </Dropdown.Item>
                          )
                        );
                      })}
                    </DropdownButton>
                  </>
                )}

                <div className="d-grid gap-2 col-12 mx-auto">
                  <label className="form-label">Product Description</label>
                  <input
                    type="text"
                    id="loginPassword"
                    className="form-control"
                    value={postData?.Description}
                    onChange={(e) =>
                      setPostData({
                        ...postData,
                        Description: e.target.value,
                      })
                    }
                  />
                </div>

                <div
                  className="d-grid gap-2 col-12 mx-auto"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setPostData({ ...postData, selectedFile: base64 })
                    }
                  />
                </div>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <button
                    id="submit-btn"
                    type="submit"
                    className="btn btn-dark btn-block mb-4"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <Link id="Link" to="/">
            <i
              style={{
                fontSize: "1.3rem",
                marginTop: "2.6rem",
                marginLeft: "6rem",
              }}
              className="fa fa-sign-out"
              aria-hidden="true"
              onClick={LogOut}
            />
          </Link>
        </div>
      </div>
      <div
        id="table--div"
        style={{
          marginTop: "3rem",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <table id="mytable" className="table">
          <thead>
            <tr style={{ backgroundColor: "black", color: "white" }}>
              <th className="th-sm">Id</th>
              <th className="th-sm">Title</th>
              <th className="th-sm">Price</th>
              <th className="th-sm">Code</th>
              <th className="th-sm">Category</th>
              <th className="th-sm">Sub Category</th>
              <th className="th-sm">Collection</th>
              <th className="th-sm">Size</th>
              <th className="th-sm">Color</th>
              <th className="th-sm">Image</th>
              <th className="th-sm">Description</th>
              <th className="th-sm">Actions</th>
            </tr>
          </thead>
          {prod ? (
            <tbody>
              {prod[0]?.map((element) => {
                return (
                  <tr style={{ backgroundColor: "#f5f8fc" }}>
                    <td>{element._id}</td>
                    <td>{element.Title}</td>
                    <td>{element.Price}</td>
                    <td>{element.Code}</td>
                    <td>{element.Category}</td>
                    <td>{element.SubCategory}</td>
                    <td>{element.Collection}</td>
                    <td>{element.Size}</td>
                    <td>{element.Color}</td>
                    <td>
                      <img
                        style={{ width: "70px" }}
                        src={element.selectedFile}
                      />
                    </td>
                    <td>{element.Description}</td>
                    <td>
                      <button
                        style={{ marginRight: "6px" }}
                        className="btn btn-danger"
                        onClick={() => {
                          delProducts(element);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-dark"
                        onClick={() => editHandler(element)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <p>No Products</p>
          )}
        </table>
      </div>
    </div>
  );
}

export default ManageProducts;
