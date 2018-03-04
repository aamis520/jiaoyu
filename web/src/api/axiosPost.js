import Axios from 'axios'
let baseURL = process.env.NODE_ENV === 'production' ? 'http://192.168.1.150:8080' : ''
//let baseURL = process.env.NODE_ENV === 'production' ? 'https://zuul-server.wodecom.com' : ''
baseURL = ''
let axios = Axios.create({baseURL: baseURL})

export default axios