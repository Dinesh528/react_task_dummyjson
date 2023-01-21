import axios from 'axios';

/*Base URL to make requests to the movie database */
const instance = axios.create({
    baseURL:"https://dummyjson.com/products/category"
});

export default instance;