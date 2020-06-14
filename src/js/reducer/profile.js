import { 
  USER_UPDATE_SUCCESS,
  USER_FETCH_SUCCESS,
  USER_FAIL,
  HANDLER,
  CLEAR_PROFILE,
} from '../actionCreators/profileAction'

const InitialState = {
  user: null,
  error:  [],
  isCheck: false,
  success: false,
}

function Profile(state = InitialState , action){
   const { type } = action
   switch(type){
     case USER_FETCH_SUCCESS : {
         const { user } =  action.payload
         return {
             ...state,
             user: {
                  ...user
             },
             isCheck: true
         }
      }

      case USER_UPDATE_SUCCESS: {
        const { user } =  action.payload
        return {
           ...state,
           user: {
             ...user
          },
          success: true
        }
      }
      
      case USER_FAIL: {
        const { error } = action.payload
        return {
          ...state,
          error: [error],
          success: false
        }
      }
    
      case HANDLER: {
        const { property, value} = action.payload
        return {
          ...state,
          [property]: value
        }
      }

      case CLEAR_PROFILE: {
          return {
            ...state,
            user: InitialState.user,
            isCheck: false
          }
        }
      
    default: return state
   }
     
}

export default Profile