import { all } from 'redux-saga/effects'
import { AuthenticationProcess } from './loginSaga'
import { FeedSaga } from './feedSaga'
import { ArticleSaga } from './articleSaga'
import { ProfileSaga } from './profileSaga'
import { UserProfileSaga} from './userProfileSaga'

export default function* rootSaga() {
  yield all(
    [
    AuthenticationProcess(),
    FeedSaga(),
    ArticleSaga(),
    ProfileSaga(),
    UserProfileSaga()
  ]
  )
}