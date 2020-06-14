import { takeLatest, call, put } from 'redux-saga/effects'
import { 
  USER_PROFILE_SUCCESS,
  USER_PROFILE_PROCESS,
  USER_ARTICLE_SUCCESS,
  USER_ARTICLE_PROCESS,
  USER_FAV_ARTICLE_PROCESS,
  USER_FAV_ARTICLE_SUCCESS,
  USER_ARTICLE_MORE_SUCCESS,
  USER_ARTICLE_MORE_PROCESS,
  USER_ERROR,
  FOLLOW_PROCESS,
  FOLLOW_SUCCESS
 } from '../../actionCreators/userProfileAction'

 import {
  getUserProfileApi,
  getUserArticleApi,
  getUserFavArticleApi,
 } from '../../api/userProfileApi'

 import {
  followApi
 } from '../../api/article'

function* getUserProfile({payload}){
  const { username } =  payload
  const { data, error } =  yield call(getUserProfileApi, username)
  if(data){
    yield put({type:USER_PROFILE_SUCCESS ,payload: { profile: data}})
  }
  if(error){
    yield put({type:USER_ERROR ,payload: { error}})
  }
}

function* getUserArticle({payload}){
  const { username , offset=0 } =  payload
  const { data, error } =  yield call(getUserArticleApi, username, offset)
  if(data){
    yield put({type:USER_ARTICLE_SUCCESS ,payload: { articles: data}})
  }
  if(error){
    yield put({type:USER_ERROR ,payload: { error}})
  }
}

function* getUserMoreArticle({payload}){
  const { username , offset=0 } =  payload
  const { data, error } =  yield call(getUserArticleApi, username, offset)
  if(data){
    yield put({type:USER_ARTICLE_MORE_SUCCESS ,payload: { articles: data}})
  }
  if(error){
    yield put({type:USER_ERROR ,payload: { error}})
  }
}

function* getUserFavArticle({payload}){
  const { username, offset=0 } =  payload
  const { data, error } =  yield call(getUserFavArticleApi, username, offset)
  if(data){
    yield put({type:USER_FAV_ARTICLE_SUCCESS ,payload: { favArticles: data}})
  }
  if(error){
    yield put({type:USER_ERROR ,payload: { error}})
  }
}


function *articleFollower({payload}){
  const { isFollow, username, tokenValue  } = payload
  const { data, error} = yield call(followApi, isFollow,username, tokenValue)
  if(data) {
    yield put({type: FOLLOW_SUCCESS, payload: { following: data.following}})
  }
  if(error){
    yield put({type: USER_ERROR,payload: {
      error,
    }})
  }
}

export function* UserProfileSaga(){
  yield takeLatest(USER_PROFILE_PROCESS, getUserProfile)
  yield takeLatest(USER_ARTICLE_PROCESS, getUserArticle)
  yield takeLatest(USER_FAV_ARTICLE_PROCESS, getUserFavArticle)
  yield takeLatest(USER_ARTICLE_MORE_PROCESS, getUserMoreArticle)
  yield takeLatest(FOLLOW_PROCESS, articleFollower)
}