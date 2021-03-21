import React, { useRef, useState } from "react";
import BragLogo from "../components/BragLogo";
import "../styles/BrowserLogin.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GoogleLogo from "../components/GoogleLogo";

function BrowserLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleSignUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setError("");
  };

  async function handleGoogle() {
    try {
      setError("");
      setLoading(true);
      await googleSignUp();
      history.push("/");
    } catch (error) {
      setError("Error");
      console.log(error);
    }
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed To Sign In");
    }
    setLoading(false);
  }

  return (
    <div className="browserLogin">
      <div className="browserLogin__formContainer">
        <div className="browserLogin__logo">
          <BragLogo />
          {error && (
            <Dialog
              open="true"
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Error !"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {error}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </div>
        <div className="browserLogin__googleLoginBtnContainer">
          <button
            className="browserLogin__googleLoginBtn"
            onClick={handleGoogle}
          >
            <GoogleLogo />
            Sign In With Google
          </button>
        </div>

        <form
          className="browserLogin__form"
          autoComplete="new-password"
          onSubmit={handleSubmit}
        >
          <div className="browserLogin__formElement" id="email_element">
            <input
              className="browserLogin__formInput"
              type="text"
              id="email"
              name="email"
              required
              placeholder="Email:"
              autoComplete="off"
              ref={emailRef}
            />
          </div>
          <div className="browserLogin__formElement" id="password_element">
            <input
              className="browserLogin__formInput"
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
              placeholder="Password:"
              ref={passwordRef}
            />
          </div>
          <div className="browserLogin__fromBtnContainer">
            <button
              disabled={loading}
              className="browserLogin__formBtn"
              type="submit"
            >
              Log In
            </button>
            <strong className="browserLogin__forgotPass">
              <Link
                to="/forgot-password"
                style={{ color: "#45d1b5", textDecoration: "none" }}
              >
                Forgot Password?
              </Link>
            </strong>
          </div>
        </form>

        <div className="browserLogin__signUpLinkConatiner">
          <h2>
            Dont have an account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="browserLogin__signUpLink">Sign Up</span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default BrowserLogin;
