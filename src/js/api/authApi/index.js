import API from '../api'
import { ObjectToArray } from '../../helper'

export const loginApi = (username, password) => {
  return API.post('/users/login', {
        "user":{
          "email": username,
          "password": password
        }
   }).then(({data}) =>  ({"data" : data.user}))
   .catch(({ response: { data } }) => ({ error: ObjectToArray(data.errors) }))

}

export const registerApi = (email,username, password) => {
  return API.post('/users', {
        user :{
          email,
          username,
          password
        }
   }).then(({data}) =>  {
    return ({"data" : data.user})
    })
   .catch(({ response: { data } }) => ({ error: ObjectToArray(data.errors) }))

}