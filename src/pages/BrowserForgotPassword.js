import React, { useRef, useState } from "react";
import BragLogo from "../components/BragLogo";
import "../styles/BrowserForgotPassword.css";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function BrowserForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setError("");
    setMessage("");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check Your Inbox For Further Instructions");
    } catch {
      setError("Failed To Reset Password");
    }
    setLoading(false);
  }

  return (
    <div className="browserForgotPassword">
      <div className="browserForgotPassword__formContainer">
        <div className="browserForgotPassword__logo">
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
          {message && (
            <Dialog
              open="true"
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Mail Sent !"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {message}
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
          className="browserForgotPassword__form"
          autoComplete="new-password"
          onSubmit={handleSubmit}
        >
          <div
            className="browserForgotPassword__formElement"
            id="email_element"
          >
            <input
              className="browserForgotPassword__formInput"
              type="text"
              id="email"
              name="email"
              required
              placeholder="Email:"
              autoComplete="off"
              ref={emailRef}
            />
          </div>
          <div className="browserForgotPassword__fromBtnContainer">
            <button
              disabled={loading}
              className="browserForgotPassword__formBtn"
              type="submit"
            >
              Reset Password
            </button>
            <strong className="browserForgotPassword__forgotPass">
              <Link
                to="/login"
                style={{ color: "#45d1b5", textDecoration: "none" }}
              >
                Login
              </Link>
            </strong>
          </div>
        </form>
        <div className="browserForgotPassword__signUpLinkConatiner">
          <h2>
            Dont have an account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="browserForgotPassword__signUpLink">Sign Up</span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default BrowserForgotPassword;
