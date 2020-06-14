export const USER_PROFILE_PROCESS = 'USER_PROFILE_PROCESS'
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
export const USER_ARTICLE_PROCESS = 'USER_ARTICLE_PROCESS'
export const USER_ARTICLE_SUCCESS = 'USER_ARTICLE_SUCCESS'
export const USER_FAV_ARTICLE_PROCESS = 'USER_FAV_ARTICLE_PROCESS'
export const USER_FAV_ARTICLE_SUCCESS = 'USER_FAV_ARTICLE_SUCCESS'
export const USER_ERROR = 'USER_ERROR'
export const HANDLER = 'HANDLER'
export const USER_ARTICLE_MORE_SUCCESS = 'USER_ARTICLE_MORE_SUCCESS'
export const USER_ARTICLE_MORE_PROCESS = 'USER_ARTICLE_MORE_PROCESS'
export const FOLLOW_PROCESS = 'FOLLOW_PROCESS'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'

const getUserProfile = (username) => {
  return {
    type: USER_PROFILE_PROCESS,
    payload: {
      username
    }
  }
}
const getUserArticle = (username, offset=0) => {
  return {
    type:USER_ARTICLE_PROCESS,
    payload: {
      username,
      offset
    }
  }
}

const getUserFavArticle = (username)=>{
  return {
    type: USER_FAV_ARTICLE_PROCESS,
    payload: {
      username
    }
  }
}
const getUserMoreArticle = (username, offset) => {
  return {
    type: USER_ARTICLE_MORE_PROCESS,
    payload: {
      username,
      offset
    }
  }
}
 const handler = (property, value) => {
  return {
    type: HANDLER,
    payload:{
      property,
      value
    }
  }
 }

 export const followUser = (isFollow,username,tokenValue) => {
  return {
    type: FOLLOW_PROCESS,
    payload: {
       isFollow,
       username,
       tokenValue
    }
  }
}
export default {
  getUserProfile,
  getUserFavArticle,
  getUserArticle,
  handler,
  getUserMoreArticle,
  followUser
}