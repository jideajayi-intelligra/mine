import { endpoints } from '../../config/endpoints'
import { post, get } from '../../utils/remote'

module.exports = {
    addUser: (username, password) => {
      //add user
      return post(endpoints.ADD_USER, {username, password}, (res, error) => {

        if(error){
            //something went wrong, throw/return error
        }

        return res
      })
    },
  
  };