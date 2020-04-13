import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhos:3001'
});