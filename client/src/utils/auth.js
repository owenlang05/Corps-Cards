import { jwtDecode } from 'jwt-decode';

const ID_TOKEN = 'id_token'

class AuthService {
  getToken() {
    return localStorage.getIte(ID_TOKEN);
  }

  getProfile() {
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);

      if (decoded.exp < Date.now() / 1000) {
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  login(idToken) {
    localStorage.setItem(ID_TOKEN, idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem(ID_TOKEN);
    window.location.assign('/');
  }
}

export default new AuthService();