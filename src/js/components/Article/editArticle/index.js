import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import articleAction from '../../../actionCreators/articleAction'
import { Authenticate } from '../../../common/components/hoc/authenticate'
import ArticleTemplate from '../../../common/components/ArticleTemplate'

class EditArticle extends Component{
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
      handler('isPublished',false)
      handler('publishArticleSlug', null)
      handler('publishedArticle',{})
      getPublishArticle(slug,tokenValue())
    }
  }
  componentDidUpdate(prevProps,prevState){
    const { publishedArticle, isEdit } = this.props

    if(isEdit && prevState.slug !== this.props.publishedArticle.slug){
      const { publishedArticle: {title, body, description,tagList, slug } } = this.props
      this.setState({
        title,
        body,
        description,
        tagList: tagList.join(','),
        slug
      })
    }
  }
  cancelHandler = (slug) => {
    return <Redirect to={`/article/${slug}`} />
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
   const {classes, canModify,isEdit, isLoggedIn,publishArticleSlug, isPublished, publishedArticle} = this.props
   const { title, description, body, tagList} = this.state
   return (
      <>
         { isPublished && <Redirect to={`/article/${publishArticleSlug}`} />}
         { !isLoggedIn && <Redirect to="/auth" /> }
         { isEdit && publishedArticle && publishedArticle.author && !canModify(publishedArticle.author.username) && <Redirect to="/" /> }
          <ArticleTemplate 
            title={title} 
            description={description} 
            body={body} 
            tagList={tagList}
            submitHandler={this.submitHandler}
            handler={this.handler}
            isEdit={isEdit}
            cancelHandler={() => this.cancelHandler(publishArticleSlug)}
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


export default connect(mapStateToProps, mapDisptachToProps)(Authenticate(EditArticle))