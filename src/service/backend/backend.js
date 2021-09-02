import { endPoints } from '../../config/end-points'
import { post, get } from '../../utils/remote'

module.exports = {
    addUser: (username, password) => {
      //add user
      return post(endPoints.ADD_USER, {username, password}, (res, error) => {
          
        if(error){
            //something went wrong
        }
        return res
      })
    },
  
  };