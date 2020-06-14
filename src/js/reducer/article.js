import { 
  GET_ARTICLE_SUCCESS,
  GET_COMMENT_SUCCESS,
  POST_COMMENT_SUCCESS,
  POST_DELETE_COMMENT_SUCCESS,
  GET_PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_SUCCESS,
  FOLLOW_SUCCESS,
  HANDLER,
  FAV_SUCCESS,
  POST_DELETE_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_PROCESS,
  GET_ARTICLE_PROCESS,
  GET_PUBLISH_ARTICLE_PROCESS,
  FAIL,
} from '../actionCreators/articleAction'

const InitialState = {
  article: {},
  publishArticleSlug: null,
  publishArticle: {},
  comment: [],
  error:  null,
  isPublished: false,
  isDeleted: false,
  isloading: false,
}

function Article(state = InitialState , action){
   const { type } = action
   switch(type){
     case GET_ARTICLE_SUCCESS : {
         const { article } =  action.payload
         return {
             ...state,
             article: {
                  ...article
             },
             isloading: false,
         }
      }

      case GET_ARTICLE_PROCESS: {
        return {
          ...state,
          isloading: true,
        }
      }

      case GET_PUBLISH_ARTICLE_PROCESS: {
        return {
          ...state,
          isloading: true,
        }
      }

     case HANDLER: {
       const { property, value} = action.payload
       return {
         ...state,
         [property]: value
       }
     }
      case GET_PUBLISH_ARTICLE_SUCCESS : {
        const { article } =  action.payload
        return {
            ...state,
            publishArticle: {
              ...article
            },
            isloading: false,
        }
     }

     case  PUBLISH_ARTICLE_SUCCESS : {
      const { article } =  action.payload
      return {
          ...state,
          publishArticleSlug: article.slug,
          isPublished: true,
          isloading: false,
      }
   }

   case PUBLISH_ARTICLE_PROCESS: {
     return {
       ...state,
       isloading: true,
     }
   }


      case GET_COMMENT_SUCCESS : {
        const { comment } =  action.payload
        return {
            ...state,
            comment: [
                 ...comment
            ],
            isloading: false,
        }
     }

     case FOLLOW_SUCCESS: {
       const { following } = action.payload
       return {
           ...state,
           article: {
              ...state.article,
              author: {
                ...state.article.author,
                following,
              }
           }
       }
     }

     case FAIL: {
      const { error } = action.payload
       return {
         ...state,
         error: error,
         isloading: false,
       }
    }

     case POST_COMMENT_SUCCESS: {
      const { ct } = action.payload
      return {
        ...state,
        comment: [
               ct,
             ...state.comment
        ]
      }
    }
    case POST_DELETE_COMMENT_SUCCESS: {
      const { comment } = state
      const { id } = action.payload
      const newCommentArr = comment.filter(item => item.id != id )
       return {
          ...state,
          comment: [...newCommentArr]
       }
    }

    case POST_DELETE_ARTICLE_SUCCESS: {
       return {
          ...state,
          isDeleted: true
       }
    }

    case FAV_SUCCESS: {
      const { article } = action.payload
      return {
         ...state,
         article: {
           ...state.article,
           favorited: article.favorited,
           favoritesCount: article.favoritesCount
         }
      }
    }


    default: return state
   }
     
}

export default Article