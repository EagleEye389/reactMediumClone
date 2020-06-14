import API from '../api'
import { Header } from '../../helper'

export const getArticleDetailsApi = (slug,tokenValue) => {
  const headers = Header(tokenValue)
  return API.get(`/articles/${slug}`, { headers })
      .then(({data}) =>  ({"data" : data.article}))
   .catch(
      ({response: {data}}) => { 
         return { error: data.error || 'Internal server error' } })

}

export const getArticleCommentApi = (slug) => {
   return API.get(`/articles/${slug}/comments`)
       .then(({data}) =>  ({"data" : data.comments}))
    .catch(({response: {data}}) => ({ error: data.error || 'Internal server error' }))
 
 }

 export const postArticleCommentApi = (post,slug, tokenValue) => {
     const data = {
        comment : {
           body : post
        }
     }
     const headers = Header(tokenValue)
     return API.post(`/articles/${slug}/comments`, data, { headers })
     .then(({data}) =>  ({"data" : data.comment}))
     .catch(({response: {data}}) => ({ error: data.error || 'Internal server error' }))
  
 }

 export const deletePostCommentApi = (id, slug,tokenValue) => {
   const headers = Header(tokenValue)
   return API.delete(`/articles/${slug}/comments/${id}`, { headers})
   .then(() =>  ({"data" : true}))
   .catch(({response: {data}}) => ({ error: data.error || 'Internal server error' }))

 }


 export const followApi = (isFollow, username, tokenValue) => {
    const url = `/profiles/${username}/follow`
    const headers = Header(tokenValue)
    const apiCall =  isFollow ? API.post(url,null,{ headers}) : API.delete(url,{headers:headers})
   return apiCall.then(({data}) =>  ({"data" : data.profile}))
      .catch(({response: {data}}) => ({ error: data.error || 'Internal server error' }))
  
 }

 export const favouriteApi = (isFavourite, slug, tokenValue) => {
   const url = `/articles/${slug}/favorite`
   const headers = Header(tokenValue)
   const apiCall =  isFavourite ? API.post(url,null,{headers: headers}) : API.delete(url,{headers:headers})
  return apiCall.then(({data}) =>  ({"data" : data.article}))
     .catch(({response: {data}}) => ({ error: data.error || 'Internal server error' }))
}

export const publishApi = (postBody, tokenValue) => {
   const url = `/articles`
   const headers = Header(tokenValue)
   return  API.post(url,postBody,{headers})
        .then(({data}) =>  ({"data" : data.article}))
        .catch(({response: {data}}) => ({ error: data.error || 'Internal server error' }))
}


export const deleteArticleApi = (slug, tokenValue) => {
   const url = `/articles/${slug}`
   const headers = Header(tokenValue)
   return  API.delete(url,{headers})
        .then(({data}) =>  ({"data" : true}))
        .catch(({response: {data}}) => ({ error: data.error || 'Internal server error' }))
}