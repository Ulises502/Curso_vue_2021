import axios from 'axios'

export default
    config => {
        //console.log("La url usada por config: " + config);
        return axios.create({ baseURL: config });
    }