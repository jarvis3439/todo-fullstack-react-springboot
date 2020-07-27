class AuthenticationService {
  successLogin(username) {
    sessionStorage.setItem("authenticatedUser", username);
  }
  successLogout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}
export default new AuthenticationService();
