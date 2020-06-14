import { 
  USER_PROFILE_SUCCESS,
  USER_ARTICLE_SUCCESS,
  USER_FAV_ARTICLE_SUCCESS,
  USER_ARTICLE_MORE_SUCCESS,
  USER_ERROR,
  HANDLER,
  USER_PROFILE_PROCESS,
  USER_ARTICLE_PROCESS,
  USER_ARTICLE_MORE_PROCESS,
  USER_FAV_ARTICLE_PROCESS,
  FOLLOW_SUCCESS,
  FOLLOW_PROCESS
} from '../actionCreators/userProfileAction'

const InitialState = {
  profile: {},
  articles: [],
  favArticles: [],
  error: null,
  isloading: false,
}

function UserProfile(state = InitialState , action){
   const { type } = action
   switch(type){

     case USER_PROFILE_PROCESS: {
       return {
         ...state,
         isloading: true,
       }
     }
     case FOLLOW_SUCCESS: { 
       const { following }= action.payload
       return {
        ...state,
        profile: {
          ...state.profile,
          following
        },
        isloading: false
       }
     }
     case FOLLOW_PROCESS: {
      return {
         ...state,
         isloading: true,
      }
     }
     case USER_PROFILE_SUCCESS : {
         const { profile } =  action.payload
         return {
             ...state,
             profile: {
                  ...profile
             },
             isloading: false,
         }
      }
     case USER_ARTICLE_PROCESS: {
       return {
         ...state,
        isloading: true,
       }
     }
      case USER_ARTICLE_SUCCESS: {
        const { articles } =  action.payload
        return {
           ...state,
           articles: [
             ...articles
           ],
           isloading: false,
        }
      }
     case USER_ARTICLE_MORE_PROCESS: {
       return {
         ...state,
         isloading: true,
       }
     }
      case USER_ARTICLE_MORE_SUCCESS: {
        const { articles } =  action.payload
        if (articles.length){
        return {
           ...state,
           articles: [
             ...state.articles,
             ...articles
           ],
           isloading: false,
        }
      }
      else {
        return {
          ...state,
          isloading: false,
        }
      }
     } 
      case USER_FAV_ARTICLE_SUCCESS: {
        const { favArticles } =  action.payload
        return {
           ...state,
           favArticles: [
             ...favArticles
           ],
           isloading: false,
        }
      }

      case USER_FAV_ARTICLE_PROCESS: {
        return {
           ...state,
           isloading: true,
        }
      }
      
      case USER_ERROR: {
        const { error } = action.payload
        return {
          ...state,
          error: error,
          isloading: false,
        }
      }
    
      case HANDLER: {
        const { property, value} = action.payload
        return {
          ...state,
          [property]: value
        }
      }
      
    default: return state
   }
     
}

export default UserProfile