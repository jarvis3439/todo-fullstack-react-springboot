import React from "react";

function LoginResponse(props) {
  return (
    <div>
      {props.status === true ? (
        <div> Login Successfull </div>
      ) : props.status === false ? (
        <div>Invalid Credential</div>
      ) : null}
    </div>
  );
}

export default LoginResponse;
