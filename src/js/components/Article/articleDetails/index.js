import React, { Component} from 'react'
import { withStyles }  from '@material-ui/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { faHeart,faPlus, faPenAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

import { Redirect } from 'react-router-dom'

import { Authenticate } from '../../../common/components/hoc/authenticate'
import defaultImage  from '../../../../assests/image/profile.jpg'
import articleAction from '../../../actionCreators/articleAction'
import Button from '../../../common/components/Button'
import Loader from  '../../../common/components/loader'
import PostCommentBox from './PostCommentBox'
import CommentBox from './CommentBox'
import Tag from '../tag'

import style from './style'

class ArticleDetails extends Component{

   componentDidMount() {
    const { 
      getArticleDetail, 
      getComments, 
      tokenValue,
      handler,
      match: { params: { slug}} } = this.props
     getArticleDetail(slug,tokenValue())
     getComments(slug)
     handler('isDeleted', false)
     handler('article', {})
     handler('error',null)
   }

    Text = (check,count) => {
    let name = ''
     if(check){
       name  = ' un'
     }
     return `${name}favourite (${count})`
  }

  editClickHandler = (slug) => {
    const {  history } = this.props
    history.replace(`/articleEditor/${slug}`)
  }

  checkLogin = (fn, ...params) => {
    const { isLoggedIn, tokenValue, history } = this.props
    if(isLoggedIn){
      fn.apply(null, [...params, tokenValue()])
    }else {
       history.replace("/auth")
    }
  }

  render() {
  
    const { 
       classes, article, comments, favouriteHandler,canModify, isLoggedIn,error,isloading,
       deleteComment,follower, tokenValue, deleteArticle,  isDeleted } = this.props
    return( <div className={classes.box}>
         { isDeleted && <Redirect to="/" />}
         {error && <div className={classes.error}> {error} </div>}
        { isloading && <Loader isLoading={isloading} /> }
         <div className={classes.header}>
            <h2> {article.title}</h2><hr/>
          <div className={classes.userdetails}>
              <div className={classes.userImage}>
                {article.author  
                  && <img src={ article.author.image || defaultImage} /> 
                }
              </div>
              <div className={classes.user}>
                {article.author 
                  &&    
                  <div className={classes.name}>{article.author.username}</div> 
                }
                {article.createdAt  
                   && 
                   <div className={classes.date}>
                    {new Date(article.createdAt).toISOString().slice(0, 10)}
                  </div> 
                }
              </div>
              <div className={classes.options}>
                {article.author && (<>
                  <Button 
                    icon={faPlus}
                    text={ article.author.following ? " unfollow": "follow"} 
                    isVisible={!canModify(article.author.username) || !isLoggedIn }
                    clickHandler={() => this.checkLogin(follower,!article.author.following, article.author.username)} />
                 <div className={classes.favourite}>
                    <Button 
                    icon={faHeart}
                    text={this.Text(article.favorited,article.favoritesCount)} 
                    isVisible={!canModify(article.author.username) || !isLoggedIn}
                    clickHandler={() => this.checkLogin(favouriteHandler,!article.favorited, article.slug)} />
                 </div>
                    
                    <Button 
                     isVisible={canModify(article.author.username)  && isLoggedIn} 
                     text="Edit Article"
                     icon={faPenAlt}
                     clickHandler={()=> this.editClickHandler(article.slug)} /> 

                     <Button 
                     isVisible={canModify(article.author.username) && isLoggedIn} 
                     text="Delete Article"
                     variant="secondary"
                     icon={faTrashAlt}
                     clickHandler={()=>{deleteArticle(article.slug,tokenValue())}}
                    /> </>)
                }
              </div>
           </div>
           
         </div>
         <div className={classes.details}>
            {article.body}
         </div><hr/>
         <div className={classes.tagDetails}>
           <Tag tags={article.tagList} />
         </div><hr/>
      <div className={classes.comment}>
          <PostCommentBox slug={article.slug}/>
      </div>
      <div className={classes.commentData}>
       { comments.map(comment => 
          <CommentBox 
           key={comment.id} 
           comment={comment} 
           slug={article.slug}
           deleteCo={deleteComment} /> ) 
       }
      </div>
    </div>)
  }

}
ArticleDetails.defaultProps ={
  article: {
    author: {
      username: '',
      bio: null,
      following: false
    },
    createdAt: null
  },
  comments: []
}
const mapStateToProps = (state, ownprops) => {
  return {
    article: state.Article.article, 
    error:  state.Article.error,
    comments: state.Article.comment,
    tokenValue:  state.Auth.user.token,
    isDeleted:  state.Article.isDeleted,
    isloading: state.Article.isloading
  }
}
const mapDisptachToProps = (dispatch) => {
  return bindActionCreators({
    getArticleDetail: articleAction.getArticle,
    getComments: articleAction.getArticleComment,
    deleteComment: articleAction.deleteComment,
    follower:  articleAction.follower,
    favouriteHandler: articleAction.favourite,
    handler:  articleAction.handler,
    deleteArticle:  articleAction.deleteArticle
  },dispatch)
}

export default connect(mapStateToProps,mapDisptachToProps)(
  Authenticate(withStyles(style)(ArticleDetails)))