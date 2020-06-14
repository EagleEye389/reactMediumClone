import { takeLatest, call, put } from 'redux-saga/effects'
import { 
  USER_FETCH_PROCESS,
  USER_UPDATE_PROCESS,
  USER_FAIL,
  USER_UPDATE_SUCCESS,
  USER_FETCH_SUCCESS,
 } from '../../actionCreators/profileAction'

 import {
  getProfileApi,
  updateProfileApi
 } from '../../api/profileApi'

function* getUserProfile({payload}){
  const { tokenValue } =  payload
  const { data, error } =  yield call(getProfileApi, tokenValue)
  if(data){
    yield put({type:USER_FETCH_SUCCESS ,payload: { user: data}})
  }
  if(error){
    yield put({type:USER_FAIL ,payload: { error}})
  }
}

function* updateUserProfile({payload}){
  const { userObj, tokenValue } =  payload
  const { data, error } =  yield call(updateProfileApi, userObj,tokenValue)
  if(data){
    yield put({type:USER_UPDATE_SUCCESS ,payload: { user: data}})
  }
  if(error){
    yield put({type:USER_FAIL ,payload: { error}})
  }
}

export function* ProfileSaga(){
  yield takeLatest(USER_FETCH_PROCESS, getUserProfile)
  yield takeLatest(USER_UPDATE_PROCESS, updateUserProfile)

}