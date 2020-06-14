import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import articleAction from '../../../actionCreators/articleAction'
import { Authenticate } from '../../../common/components/hoc/authenticate'
import ArticleTemplate from '../../../common/components/ArticleTemplate'

class NewArticle extends Component{
  state ={
    title: null,
    description: null,
    body: null,
    tagList: '',
    slug: null,
  }
 
  constructor(props) {
     super(props)
     this.state.slug =null
     const { handler } =  this.props
     handler('isPublished',false)
     handler('publishArticleSlug', null)
     handler('publishedArticle',{})
  }
  componentDidMount() {
    const { isEdit,handler, getPublishArticle, match: {params: {slug}}, tokenValue } = this.props
    if(isEdit){
      console.log("component did mount is calling")
      handler('isPublished',false)
      handler('publishArticleSlug', null)
      handler('publishedArticle',{})
      getPublishArticle(slug,tokenValue())
    }
  }
  
  submitHandler = ($event) => {
      const { publishArticle, tokenValue } = this.props
      const { title, description, body, tagList} = this.state
      const publishArticleObject = {
        article: {
          title,
          description,
          body,
          tagList: [...tagList.split(',')]
        }
      }
      publishArticle(publishArticleObject, tokenValue())
  }

  handler = ($event) => {
    const { name , value } = $event.target
    this.setState({
      [name]: value
    })
  }

 render() {
   console.log('rendering started')
   const {classes, canModify,isEdit, isLoggedIn,publishArticleSlug, isPublished, publishedArticle} = this.props
   const { title, description, body, tagList} = this.state
   return (
      <>
         { isPublished && <Redirect to={`/article/${publishArticleSlug}`} />}
         { !isLoggedIn && <Redirect to="/auth" /> }
          <ArticleTemplate 
            title={title} 
            description={description} 
            body={body} 
            tagList={tagList}
            submitHandler={this.submitHandler}
            handler={this.handler}
            />
            
   </>)
 }
}

const mapStateToProps = (state, ownprops) => {
  return {
    error:  state.Article.publishError,
    isPublished:  state.Article.isPublished,
    publishArticleSlug: state.Article.publishArticleSlug,
    publishedArticle: state.Article.publishArticle
  }
}
const mapDisptachToProps = (dispatch) => {
  return bindActionCreators({
    publishArticle: articleAction.publishArticle,
    handler:  articleAction.handler,
    getPublishArticle: articleAction.getPublishArticle
  },dispatch)
}


export default connect(mapStateToProps, mapDisptachToProps)(Authenticate(NewArticle))