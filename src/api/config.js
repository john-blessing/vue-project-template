import axios from 'axios';
//axios 用法：
//https://www.npmjs.com/package/axios
var api = axios.create({
    baseURL: '',
    withCredentials: true,
    timeout: 5000,
});

export default api;