import axios from 'axios';

const Base = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default Base