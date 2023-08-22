import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const resgoo = (res) => {
    console.log(res);
  };

  return (
    <div className="pgbody">
      <h1>Login Page</h1>
      <p>
        Allow users to login via 3rd party authentication e.g. their google
        login... Ensure that email verification is used. Once a user is
        authenticated they will have a new option on the navigation menu "New
        Post" which will allow them to navigate to the NewPostPage. There they
        will have the ability to create a brand new post to the system.
      </p>

      <GoogleLogin />
    </div>
  );
};

export default Login;
