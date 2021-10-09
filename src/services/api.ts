import axios from "axios";

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/allissonneo/APIextends-Placeholder/produtos'
})

export default api;