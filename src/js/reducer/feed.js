import { 
  FEED_SUCCESS,
  FEED_FAIL,
  FEED_MORE_SUCCESS,
  FEED_MORE_PROCESS,
  FEED_PROCESS,
  HANDLER,
} from '../actionCreators/feedAction'

const InitialState = {
  articles: [],
  error:  null,
  isloading: false,
}

function Feed(state = InitialState , action){
   const { type } = action
   switch(type){
     case FEED_SUCCESS : {
         const { articles } =  action.payload
         return {
             ...state,
             articles: [
                  ...articles
             ],
             isloading: false,
         }
      }

      case FEED_PROCESS: {
        return  {
          ...state,
          isloading: true,
        }
      }

      case FEED_MORE_PROCESS: {
        return {
          ...state,
          isloading: true,
        }
      }

      case FEED_MORE_SUCCESS: {
        const { articles } =  action.payload
        return {
           ...state,
           articles: [
             ...state.articles,
             ...articles
           ],
           isloading: false,
        }
      }
      
      case FEED_FAIL: {
        const { error } = action.payload
        return {
          ...state,
          error,
          isloading: false,
        }
      }

      case HANDLER: {
        const { property, value} = action.payload
        return {
          ...state,
          [property]:value
        }
      }

    default: return state
   }
     
}

export default Feed