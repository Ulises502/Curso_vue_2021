import axios from 'axios'

export default config => axios.create({ baseURL: config.baseURL })