import API from '../api'

export const getUserProfileApi = (username) => {
  return API.get(`/profiles/${username}`,)
      .then(({data}) =>  ({"data" : data.profile}))
   .catch(({ response: {data} }) => ({ error: data.error || 'Internal server error' }))

}

export const getUserArticleApi = (username, offset) => {
  return API.get(`/articles?author=${username}&limit=24&offset=${offset}`,)
      .then(({data}) =>  ({"data" : data.articles}))
   .catch(({ response: { data } }) => ({ error: data.error || 'Internal server error' }))
}

export const getUserFavArticleApi = (username, offset) => {
  return API.get(`/articles?favorited=${username}&limit=24&offset=${offset}`,)
      .then(({data}) =>  ({"data" : data.articles}))
   .catch(({ response: { data } }) => ({ error: data.error ||'Internal server error' }))
}

