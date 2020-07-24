import React from "react";

function LoginResponse(props) {
  return (
    <div>
      {props.status === true ? (
        <div> Login Successfull </div>
      ) : props.status === false ? (
        <div> Login Failed </div>
      ) : null}
    </div>
  );
}

export default LoginResponse;
