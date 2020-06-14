import { 
    AUTH_FAIL, 
    CLEAR_ERROR, 
    AUTH_SUCCESS,
    HANDLER,
    CLEAR_USER,
 } from '../actionCreators/loginAction'
const InitialState = {
    user: {
        bio: null,
        createdAt: null,
        email: null,
        id: null,
        image: null,
        updatedAt: null,
        username: null,
        token: null,
    },
    error : [],
    loggedIn: false,
    isLoggedInCheck: false,
}
 
 function Auth(state = InitialState , action){
     const { type } = action
     switch(type){
       case AUTH_SUCCESS : {
           const { user } =  action.payload
           const { token,username } = user
           window.localStorage.setItem('token', token)
           window.localStorage.setItem('currentUser',username)
           return {
               ...state,
               loggedIn: true,
               user: {
                   ...state.user,
                    ...user
               },
               isLoggedInCheck: true,
           }
        } 
        case CLEAR_USER: {
              return {
                  ...state,
                  user: {
                      ...InitialState
                  },
                  error : InitialState.error,
                  loggedIn: InitialState.loggedIn,
                  isLoggedInCheck: InitialState.isLoggedInCheck,
              }
        }
       case AUTH_FAIL : {
            const { error } =  action.payload
            return {
                ...state,
                error: error,
            }
        } 
    case HANDLER: {
            const { property, value} = action.payload
            return {
              ...state,
              [property]: value
            }
         }

       case CLEAR_ERROR: 
            return {
                ...state,
                error:  [...InitialState.error] ,
            }

      default: return state
     }
       
 }
 
 export default Auth