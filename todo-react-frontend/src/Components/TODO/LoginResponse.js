import React from "react";

function LoginResponse(props) {
  return (
    <div>
      {props.status ? (
        <div>Success</div>
      ) : props.status === false ? (
        <div>Invalid</div>
      ) : null}
    </div>
  );
}

export default LoginResponse;
