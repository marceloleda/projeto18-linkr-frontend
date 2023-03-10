import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);

  return promise;
}
function timeLine(body){
  const promise = axios.post(`${BASE_URL}/timeline`, body);
  return promise;
}
function getPosts(){
  const promise = axios.get(`${BASE_URL}/timeline`);

  return promise;
}
const api = {
  login,
  signUp,
  timeLine,
  getPosts
}

export default api;