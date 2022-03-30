import axios from 'axios'

const API = axios.create({
    baseURL: "https://data.gov.sg"
})

export default API;