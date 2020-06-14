import { createStore ,applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'
import Auth from '../reducer/auth'
import Feed from '../reducer/feed'
import Article from '../reducer/article'
import Profile from '../reducer/profile'
import UserProfile from '../reducer/userProfile'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const Reducer = combineReducers({
  Auth,
  Feed,
  Article,
  Profile,
  UserProfile,
})
const sagaMiddleWare = createSagaMiddleware()

let store = createStore(Reducer,composeEnhancers(applyMiddleware(sagaMiddleWare)))
sagaMiddleWare.run(rootSaga)
export default store