export const GET_ARTICLE_PROCESS = 'GET_ARTICLE_PROCESS'
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS'
export const GET_COMMENT_PROCESS = 'GET_COMMENT_PROCESS'
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS'
export const POST_COMMENT_PROCESS = 'POST_COMMENT_PROCESS'
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS'
export const POST_DELETE_PROCESS = 'POST_DELETE_PROCESS'
export const POST_DELETE_COMMENT_SUCCESS = 'POST_DELETE_COMMENT_SUCCESS'
export const POST_DELETE_COMMENT_FAIL = 'POST_DELETE_COMMENT_FAIL'
export const FOLLOW_PROCESS = 'FOLLOW_PROCESS'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FAV_PROCESS = 'FAV_PROCESS'
export const FAV_SUCCESS = 'FAV_SUCCESS'
export const GET_PUBLISH_ARTICLE_PROCESS = 'GET_PUBLISH_ARTICLE_PROCESS'
export const GET_PUBLISH_ARTICLE_SUCCESS = 'GET_PUBLISH_ARTICLE_SUCCESS'
export const PUBLISH_ARTICLE_PROCESS = 'PUBLISH_ARTICLE_PROCESS'
export const PUBLISH_ARTICLE_SUCCESS = 'PUBLISH_ARTICLE_SUCCESS'
export const HANDLER = 'HANDLER'
export const POST_DELETE_ARTICLE_SUCCESS = 'POST_DELETE_ARTICLE_SUCCESS'
export const POST_DELETE_ARTICLE_PROCESS = 'POST_DELETE_ARTICLE_PROCESS'
export const FAIL = 'FAIL'
export const getArticle = (slug, tokenValue) => {
  return {
    type: GET_ARTICLE_PROCESS,
    payload: {
      slug,
      tokenValue,
    }
  }
}

export const getPublishArticle = (slug, tokenValue) => {
  return {
    type: GET_PUBLISH_ARTICLE_PROCESS,
    payload: {
      slug,
      tokenValue,
    }
  }
}

export const getArticleComment = (slug) => {
  return {
    type: GET_COMMENT_PROCESS,
    payload: {
      slug
    }
  }
}

export const postComment = (post, slug,tokenValue) => {
  return {
    type: POST_COMMENT_PROCESS,
    payload: {
      post,
      slug,
      tokenValue
    }
  }
}

export const deleteComment = (id,slug,tokenValue) => {
  return {
    type: POST_DELETE_PROCESS,
    payload: {
      id,
      slug,
      tokenValue
    }
  }
}
export const follower = (isFollow,username,tokenValue) => {
  return {
    type: FOLLOW_PROCESS,
    payload: {
       isFollow,
       username,
       tokenValue
    }
  }
}

export const favourite = (isFavourite, slug,tokenValue) => {
  return {
    type: FAV_PROCESS,
    payload: {
       isFavourite,
       slug,
       tokenValue
    }
  }
}

export const publishArticle = (publishArticleObject, tokenValue) => {
  return {
    type: PUBLISH_ARTICLE_PROCESS,
    payload:{
      publishArticleObject,
      tokenValue
    }
  }
}

export const handler = (property, value) => {
  return {
    type: HANDLER,
    payload: {
      property,
      value
    }
  }
}
export const deleteArticle = (slug, tokenValue) => {
  return {
    type: POST_DELETE_ARTICLE_PROCESS,
    payload: {
      slug,
      tokenValue
    }
  }
}
export default {
  getArticle,
  getArticleComment,
  postComment,
  deleteComment,
  follower,
  favourite,
  getPublishArticle,
  publishArticle,
  handler,
  deleteArticle
}