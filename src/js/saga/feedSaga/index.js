import { takeLatest, call, put } from 'redux-saga/effects'
import { feedApi, feedMoreApi } from '../../api/feedApi'
import { 
  FEED_PROCESS, 
  FEED_SUCCESS, 
  FEED_FAIL,
  FEED_MORE_PROCESS,
  FEED_MORE_SUCCESS,
} from '../../actionCreators/feedAction'

function *getFeedSaga() {
  const { data, error} = yield call(feedApi)
  if(data) {
    yield put({type: FEED_SUCCESS, payload: { articles: data}})
  }
  if(error){
    yield put({type: FEED_FAIL ,payload: {
      error,
    }})
  }
}
function *getMoreFeedSaga({payload}) {
  const { limit, offset} = payload
  const { data, error } = yield call(feedMoreApi, limit, offset)
  if(data) {
    yield put({type: FEED_MORE_SUCCESS, payload: { articles: data}})
  }
  if(error){
    yield put({type: FEED_FAIL ,payload: {
      error,
    }})
  }
}

export function* FeedSaga() {
  yield takeLatest(FEED_PROCESS, getFeedSaga)
  yield takeLatest(FEED_MORE_PROCESS, getMoreFeedSaga)
}

