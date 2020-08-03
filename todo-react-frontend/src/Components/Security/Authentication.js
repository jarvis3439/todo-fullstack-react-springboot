class Authentication {
  loginSuccessfull(username) {
    console.log("Login Successfull");
    sessionStorage.setItem("authenticatedUser", username);
  }

  logout() {
    console.log("Logout Successfull");
    sessionStorage.removeItem("authenticatedUser");
    window.location.reload(false);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }
}
export default new Authentication();
