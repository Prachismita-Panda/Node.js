import axios from 'axios';
import { data } from 'react-router-dom';
const loginAuth = (data) =>{
    return axios.post("http://localhost:8080/api/v1/user/login", data);
}
const registerAuth = (data) =>{
    return axios.post("http://localhost:8080/api/v1/user/register", data);
}

const AuthServices = {loginAuth,registerAuth}
export default AuthServices