import React from "react";

function LoginResponse(props) {
  return (
    <div>
      {props.status ? (
        <div>Success</div>
      ) : props.status === false ? (
        <div className="alert alert-warning">Invalid Credentials</div>
      ) : null}
    </div>
  );
}

export default LoginResponse;
