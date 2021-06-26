import React, { useContext } from "react";
import "./Login.scss";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import Rotate from "react-reveal/Rotate";
import {
  faGoogle,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { createProvider } from "../../App";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useContext(createProvider);
  const Google = new firebase.auth.GoogleAuthProvider();
  const Facebook = new firebase.auth.FacebookAuthProvider();
  var Github = new firebase.auth.GithubAuthProvider();
  console.log(user);
  // google from
  const handelGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(Google)
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // facebook from

  const handelFacebook = () => {
    firebase
      .auth()
      .signInWithPopup(Facebook)
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // github from

  const handelGithub = () => {
    firebase
      .auth()
      .signInWithPopup(Github)
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // email from
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [users, newUsers] = useState(false);

  const onSubmit = (data) => {
    if (!users && data.email && data.password && data.Name) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;

          UpData(data.Name);
          setUser(user);
          history.replace(from);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (data.email && data.password && users) {
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          var user = userCredential.user;
          setUser(user);
          history.replace(from);
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  const UpData = (data) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: data,
      })
      .then(() => {
        console.log("rubel ahmed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Rotate left>
      <div className="required-1">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-5">
              <div className="row">
                <div className="col Google">
                  {users ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        placeholder="Enter your Email?"
                        type="email"
                        {...register("email", {
                          pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        className="w-100 mb-3 pb-2"
                      />
                      {errors.email && (
                        <span className="text-danger">Wrong Email</span>
                      )}
                      <input
                        type="password"
                        className="w-100 mb-3 pb-2"
                        placeholder="Enter your Password?"
                        {...register("password", { pattern: /[^A-Za-z0-9]/ })}
                      />
                      {errors.password && (
                        <span className="text-danger">Wrong, Password</span>
                      )}
                      <br />
                      <button className="w-100 p-2 submit-1" type="submit">
                        {" "}
                        Login
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        placeholder="Enter your Name?"
                        {...register("Name", { required: true })}
                        className="w-100 mb-3 pb-3"
                      />
                      {errors.Name && (
                        <span className="text-danger">
                          Please, Set Your Name
                        </span>
                      )}
                      <input
                        placeholder="Enter your Email?"
                        type="email"
                        {...register("email", {
                          pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        className="w-100 mb-3 pb-3"
                      />
                      {errors.email && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                      <input
                        type="password"
                        className="w-100 mb-3 pb-3"
                        placeholder="Enter your Password?"
                        {...register("password", { pattern: /[^A-Za-z0-9]/ })}
                      />
                      {errors.password && (
                        <span className="text-danger">
                          Please, Strong Password
                        </span>
                      )}
                      <br />
                      <button className="w-100 p-2 submit-1" type="submit">
                        {" "}
                        Register
                      </button>
                    </form>
                  )}

                  <p className="login-1">
                    {users ? (
                      <span>If you have an account, </span>
                    ) : (
                      <span>You have an Account.</span>
                    )}{" "}
                    <span onClick={() => newUsers(!users)} className="login-2">
                      {users ? <span>Register?</span> : <span>Login?</span>}
                    </span>{" "}
                  </p>
                </div>
              </div>

              <div className="row Google">
                <div className="col-md-4 ">
                  <button onClick={handelGoogle} className="GoogleButton">
                    <FontAwesomeIcon icon={faGoogle} /> Google
                  </button>
                </div>
                <div className="col-md-4 ">
                  <button onClick={handelFacebook} className="GoogleButton">
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                  </button>
                </div>
                <div className="col-md-4 ">
                  <button onClick={handelGithub} className="GoogleButton">
                    <FontAwesomeIcon icon={faGithub} /> Github
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </Rotate>
  );
};

export default Login;
