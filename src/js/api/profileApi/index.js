import API from '../api'
import { Header, ObjectToArray } from '../../helper'

export const getProfileApi = (tokenValue) => {
  const headers = Header(tokenValue)
  return API.get(`/user`, { headers })
      .then(({data}) =>  ({"data" : data.user}))
   .catch(({ response: { data } }) => ({ error: data.errors || 'Internal server error' }))

}

export const updateProfileApi = (postBody, tokenValue) => {
   const headers = Header(tokenValue)
   return  API.put('/user',{user: postBody},{headers})
        .then(({data}) =>  ({"data" : data.user}))
        .catch(({ response: { data } }) => ({ error: data.errors ? ObjectToArray(data.errors) :  'Internal server error' }))
}

