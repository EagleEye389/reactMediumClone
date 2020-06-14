import API from '../api'

export const feedApi = () => {
  return API.get('/articles?limit=24&offset=0')
      .then(({data}) =>  ({"data" : data.articles}))
   .catch(({ response: { data } }) => ({ error: data.error || 'Internal server error' }))

}

export const feedMoreApi = (limit,offset) => {
   return API.get(`/articles?limit=24&offset=${offset}`)
       .then(({data}) =>  ({"data" : data.articles}))
    .catch(({ response: { data } }) => ({ error: data.error || 'Internal server error' }))
 
 }