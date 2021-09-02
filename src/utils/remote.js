import axios from 'axios'

module.exports = {
    //post data to endpoint returns a callback with response or error
    post: (endpoint, payload, callback) => {
      axios.post(endpoint, payload).then(res => callback(res, undefined)).catch(err => callback(undefined, err));
    },


    get: (endpoint, params, callback) => {
        axios.get(endpoint, params).then(res => callback(res, undefined)).catch(err => callback(undefined, err))
    }
  };