import React from "react";

function LoginResponse(props) {
  return (
    <div>
      {props.status ? (
        <div> Login Successfull </div>
      ) : (
        <div> Login Failed </div>
      )}
    </div>
  );
}

export default LoginResponse;
