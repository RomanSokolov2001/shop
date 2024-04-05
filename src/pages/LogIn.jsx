import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../utils/AuthContext";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const LOGIN_URL = "/login";

const LogIn = () => {
  const navigate = useNavigate();
  const { userAuth, loginUser } = useAuth();
  useEffect(() => {
    if (userAuth) {
      navigate("/");
    }
  }, []);

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = user;
    const password = pwd;

    // const v1 = USER_REGEX.test(user);
    // const v2 = PWD_REGEX.test(pwd);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    const userInfo = {email, password}
    console.log(userInfo)
    loginUser(userInfo)
  };

  return (
    <div className="shop">
      <style>{`
                .section {
                    width: 100%;
                    max-width: 420px;
                    min-height: 400px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    padding: 1rem;
                }

                .form {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    flex-grow: 1;
                    padding-bottom: 1rem;
                }

                .instructions {
                    font-size: 0.75rem;
                    border-radius: 0.5rem;
                    background: #000;
                    color: #fff;
                    padding: 0.25rem;
                    position: relative;
                    bottom: -10px;
                }

                .instructions > svg {
                    margin-right: 0.25rem;
                }

                .offscreen {
                    position: absolute;
                    left: -9999px;
                }

                .hide {
                    display: none;
                }

                .valid {
                    color: limegreen;
                    margin-left: 0.25rem;
                }

                .invalid {
                    color: red;
                    margin-left: 0.25rem;
                }

                .errmsg {
                    background-color: lightpink;
                    color: firebrick;
                    font-weight: bold;
                    padding: 0.5rem;
                    margin-bottom: 0.5rem;
                }

                .line {
                    display: inline-block;
                }
                input {
                    border: black solid 1px;
                    padding: 5px;
                    border-radius: 5px;
                }
            `}</style>
      <section className="section">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <b> Log in account </b>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            {/* <FontAwesomeIcon
              icon={faCheck}
              className={validName ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validName || !user ? "hide" : "invalid"}
            /> */}
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p
            id="uidnote"
            className={
              userFocus && user && !validName ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
          <label htmlFor="password">
            Password:
            <FontAwesomeIcon
              icon={faCheck}
              className={validPwd ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validPwd || !pwd ? "hide" : "invalid"}
            />
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>
          <button className="addToCartBttn"> Log In </button>
          <p> Don't have an account? </p>
          <Link>
            <p> Create </p>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default LogIn;
