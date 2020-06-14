import { takeLatest, call, put } from 'redux-saga/effects'
import {loginApi, registerApi } from '../../api/authApi'
import { LOGIN_PROCESS, AUTH_FAIL, REGISTER_PROCESS, authSuccess } from '../../actionCreators/loginAction'

function *loginSaga({payload}) {
  const { username, password } =  payload
  const { data, error} = yield call(loginApi, username, password)
  if(data) {
    yield put(authSuccess(data))
  }
  if(error){
    yield put({type: AUTH_FAIL ,payload: {
      error,
    }})
  }
}

function *registerSaga({payload}) {
  const { email,  username, password } =  payload
  const { data, error} = yield call(registerApi, email, username, password)
  if(data) {
    yield put(authSuccess(data))
  }
  if(error){
    yield put({type: AUTH_FAIL ,payload: {
      error,
    }})
  }
}


export function* AuthenticationProcess() {
  yield takeLatest(LOGIN_PROCESS, loginSaga)
  yield takeLatest(REGISTER_PROCESS, registerSaga)

}

