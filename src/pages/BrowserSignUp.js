import React, { useRef, useState } from "react";
import BragLogo from "../components/BragLogo";
import "../styles/BrowserSignUp.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function BrowserSignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setError("");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords Do Not Match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed To Create An Account");
    }
    setLoading(false);
  }

  return (
    <div className="browserSignUp">
      <div className="browserSignUp__formContainer">
        <div className="browserSignUp__logo">
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
        <form
          className="browserSignUp__form"
          autoComplete="new-password"
          onSubmit={handleSubmit}
        >
          <div className="browserSignUp__formElement" id="email_element">
            <input
              className="browserSignUp__formInput"
              type="text"
              id="email"
              name="email"
              required
              placeholder="Email:"
              autoComplete="new-password"
              ref={emailRef}
            />
          </div>
          <div className="browserSignUp__formElement" id="password_element">
            <input
              className="browserSignUp__formInput"
              type="password"
              id="password"
              name="password"
              required
              autoComplete="new-password"
              placeholder="Password:"
              ref={passwordRef}
            />
          </div>
          <div className="browserSignUp__formElement" id="confPassword_element">
            <input
              className="browserSignUp__formInput"
              type="password"
              id="confPassword"
              name="confPassword"
              required
              autoComplete="new-password"
              placeholder="Confirm Password:"
              ref={passwordConfirmRef}
            />
          </div>
          <button
            disabled={loading}
            className="browserSignUp__formBtn"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="browserSignUp__loginLinkConatiner">
          <h2>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="browserSignUp__loginLink">Log In</span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default BrowserSignUp;
