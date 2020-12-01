//base request we make is on that localhost9000

import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9000'
});

export default instance