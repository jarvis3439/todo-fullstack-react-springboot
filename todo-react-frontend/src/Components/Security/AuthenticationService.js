class AuthenticationService {
  successLogin(username) {
    sessionStorage.setItem("authenticatedUser", username);
  }
  successLogout() {
    sessionStorage.removeItem("authenticatedUser");
    window.location.reload(false);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }
}
export default new AuthenticationService();
