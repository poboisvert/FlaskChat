import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../Hooks/auth-service";
import "./Login.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
//
//
// login  account - Route
//
//
const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  //
  //
  // register  account - Route
  //
  //
  const handleRegister = (e) => {
    e.preventDefault();

    // Clear message & Activate loading
    setMessage("");
    setLoading(true);

    // Validate all field
    form.current.validateAll();

    // If no errors
    if (checkBtn.current.context._errors.length === 0) {
      // Call BackEnd Hook
      AuthService.register(username, email, password).then(
        () => {
          // Forward to home page
          props.history.push("/");
          // Refresh page
          window.location.reload();
        },
        (error) => {
          // Aggregate to generate the error message
          console.log(error);
          // Turn off loading and set message
          setLoading(false);
          setMessage("");
        }
      );
    } else {
      // No longer loading
      setLoading(false);
    }
  };
  //
  //
  // Sign in an existing account - Route
  //
  //
  const handleLogin = (e) => {
    e.preventDefault();

    // Clear message & Activate loading
    setMessage("");
    setLoading(true);

    // Validate all field
    form.current.validateAll();

    // If no errors
    if (checkBtn.current.context._errors.length === 0) {
      // Call BackEnd Hook
      AuthService.login(username, password).then(
        () => {
          // Forward to home page
          props.history.push("/");
          // Refresh page
          window.location.reload();
        },
        (error) => {
          // Aggregate to generate the error message
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          // Turn off loading and set message
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      // No longer loading
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <img src="icon.svg" alt="Logo" />
        <Form onSubmit={handleLogin} ref={form}>
          <Input
            type="text"
            placeholder="Email - Not Mandatory to Sign In"
            className="form-control"
            name="email"
            value={email}
          />
          <Input
            type="text"
            placeholder="Username"
            className="form-control"
            name="username"
            value={username}
            onChange={onChangeUsername}
            validations={[required]}
          />
          <Input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />

          <div className="form-group">
            <button className="sign-in" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />

          <span onClick={handleRegister}>Register</span>
        </Form>
      </div>
    </div>
  );
};

export default Login;
