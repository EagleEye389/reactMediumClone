import { takeLatest, call, put } from 'redux-saga/effects'
import { 
   getArticleDetailsApi, 
   getArticleCommentApi, 
   postArticleCommentApi,
   deletePostCommentApi,
   followApi,
   favouriteApi,
   publishApi,
   deleteArticleApi,
} from '../../api/article'
import { 
  GET_ARTICLE_SUCCESS,
  GET_ARTICLE_PROCESS,
  GET_COMMENT_PROCESS,
  GET_COMMENT_SUCCESS,
  POST_COMMENT_PROCESS,
  POST_COMMENT_SUCCESS,
  POST_DELETE_PROCESS,
  POST_DELETE_COMMENT_SUCCESS,
  FOLLOW_SUCCESS,
  FOLLOW_PROCESS,
  FAV_PROCESS,
  FAV_SUCCESS,
  GET_PUBLISH_ARTICLE_SUCCESS,
  GET_PUBLISH_ARTICLE_PROCESS,
  PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_PROCESS,
  POST_DELETE_ARTICLE_SUCCESS,
  POST_DELETE_ARTICLE_PROCESS,
  FAIL,
} from '../../actionCreators/articleAction'

function *getArticleDetailSaga({payload}) {
  const { slug, tokenValue } = payload
  const { data, error} = yield call(getArticleDetailsApi, slug, tokenValue)
  if(data) {
    yield put({type: GET_ARTICLE_SUCCESS, payload: { article: data}})
  }
  if(error){
    yield put({type: FAIL ,payload: {
      error,
    }})
  }
}
function *getPublishArticleDetailSaga({payload}) {
  const { slug, tokenValue } = payload
  const { data, error} = yield call(getArticleDetailsApi, slug, tokenValue)
  if(data) {
    yield put({type: GET_PUBLISH_ARTICLE_SUCCESS, payload: { article: data}})
  }
  if(error){
    yield put({type: FAIL ,payload: {
      error,
    }})
  }
}

function *getArticleComment({payload}) {
  const { slug } = payload
  const { data, error} = yield call(getArticleCommentApi, slug)
  if(data) {
    yield put({type: GET_COMMENT_SUCCESS, payload: { comment: data}})
  }
  if(error){
    yield put({type: FAIL ,payload: {
      error,
    }})
  }
}

function *postArticleComment({payload}){
    const {  post, slug, tokenValue } = payload
    const { data, error} = yield call(postArticleCommentApi, post, slug, tokenValue)
    if(data) {
      yield put({type: POST_COMMENT_SUCCESS, payload: { ct: data}})
    }
    if(error){
      yield put({type: FAIL ,payload: {
        error,
      }})
    }
}

function *publishArticle({payload}){
  const {  publishArticleObject, tokenValue } = payload
  const { data, error} = yield call(publishApi, publishArticleObject, tokenValue)
  if(data) {
    yield put({type: PUBLISH_ARTICLE_SUCCESS, payload: { article: data}})
  }
  if(error){
    yield put({type: FAIL,payload: {
      error,
    }})
  }
}

function *deleteArticleComment({payload}){
  const {  id, slug,tokenValue } = payload
  const { data, error} = yield call(deleteArticleApi, slug,tokenValue)
  if(data) {
    yield put({type: POST_DELETE_ARTICLE_SUCCESS})
  }
  if(error){
    yield put({type: FAIL ,payload: {
      error,
    }})
  }
}
function *deleteArticle({payload}){
  const {  slug,tokenValue } = payload
  const { data, error} = yield call(deleteArticleApi, slug,tokenValue)
  if(data) {
    yield put({type: POST_DELETE_ARTICLE_SUCCESS})
  }
  if(error){
    yield put({type: FAIL ,payload: {
      error,
    }})
  }
}

function *articleFollower({payload}){
  const { isFollow, username, tokenValue  } = payload
  const { data, error} = yield call(followApi, isFollow,username, tokenValue)
  if(data) {
    yield put({type: FOLLOW_SUCCESS, payload: { following: data.following}})
  }
  if(error){
    yield put({type: FAIL,payload: {
      error,
    }})
  }
}

function *articleFavourite({payload}){
  const { isFavourite, slug,tokenValue  } = payload
  const { data, error} = yield call(favouriteApi, isFavourite, slug,tokenValue)
  if(data) {
    yield put({type: FAV_SUCCESS, payload: { article: data}})
  }
  if(error){
    yield put({type: FAIL ,payload: {
      error,
    }})
  }
}

export function* ArticleSaga() {
  yield takeLatest(GET_ARTICLE_PROCESS, getArticleDetailSaga)
  yield takeLatest(GET_COMMENT_PROCESS, getArticleComment)
  yield takeLatest(POST_COMMENT_PROCESS, postArticleComment)
  yield takeLatest(POST_DELETE_PROCESS, deleteArticleComment)
  yield takeLatest(FOLLOW_PROCESS, articleFollower)
  yield takeLatest(FAV_PROCESS, articleFavourite)
  yield takeLatest(GET_PUBLISH_ARTICLE_PROCESS, getPublishArticleDetailSaga)
  yield takeLatest(PUBLISH_ARTICLE_PROCESS, publishArticle)
  yield takeLatest(POST_DELETE_ARTICLE_PROCESS, deleteArticle)
 
}

