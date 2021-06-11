import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import classnames from 'classnames'
import { withStyles }  from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/free-solid-svg-icons/faHeart'
import faPlus  from '@fortawesome/free-solid-svg-icons/faPlus'

import defaultImage from '../../../assests/image/profile.jpg'
import userProfileAction from '../../actionCreators/userProfileAction'
import Button from '../../common/components/Button'
import MyArticle from './myArticle'
import FavArticle from './favArticle'

import style from './style'

class UserProfile extends Component {
   state = {
     currentTab: 0,
   }
   componentDidMount() {
     const { match: {params: { username }}, getUserProfile} = this.props
    getUserProfile(username)
   }

   componentDidUpdate(prevProp, prevState){
    const { match: {params: { username }}, getUserProfile,getUserArticle, getUserFavArticle} = this.props
    const { match: {params: { username:prevusername }}} = prevProp
    if(prevusername !== username ){
      getUserProfile(username)
      getUserArticle(username)
      getUserFavArticle(username)
    }
   }
   

   handleTab = (currentTab) => {
     this.setState({
       currentTab
     })
   }


   render() {
     const { classes, isloading,handler,favArticles,
      articles,getUserMoreArticle, getUserFavArticle,error,
      getUserArticle, match: {params: { username }} }= this.props
     const { currentTab } = this.state
      return (
        <div className={classes.box}>
          {error}
            <div className={classes.header}>
                <div className={classes.image}>
                  <img src={defaultImage} />
                </div>
               <div className={classes.user}>
                 <p>{username}</p>
               </div>
            </div>
            <div className={classes.appBar}>
              <div className={classes.tabs}>
                 <button 
                  className={
                     currentTab ===0 ? classnames(classes.tab,classes.active):  classnames(classes.tab) } 
                  onClick={() => this.handleTab(0)}>
                    My Articles
                  </button>
                 <button 
                   className={
                      currentTab === 1 ?  classnames(classes.tab,classes.active):classnames(classes.tab)}
                   onClick={() => this.handleTab(1)}>
                     Favourite Articles
                     </button>
              </div>
            </div>
            <div className={classes.data}>
              { currentTab === 0 && <MyArticle 
                   username={username} 
                   articles={articles}
                   handler={handler}
                   isloading={isloading}
                   getUserMoreArticle={getUserMoreArticle}
                  getUserArticle={getUserArticle}/> }
              { currentTab === 1 && <FavArticle 
                   username={username} 
                   articles={favArticles}
                   handler={handler}
                   isloading={isloading}
                   getUserMoreArticle={getUserFavArticle}
                  getUserArticle={getUserFavArticle}/> } 
            </div>
        </div>
      )
   }
}

const mapStateToProps = (state, ownprops) => {
  return {
    error:  state.UserProfile.error,
    user:  state.UserProfile.user,
    articles:  state.UserProfile.articles,
    isloading: state.UserProfile.isloading,
    favArticles:  state.UserProfile.favArticles,
    username:  null || state.UserProfile.profile.username
  }
}
const mapDisptachToProps = (dispatch) => {
  return bindActionCreators({
    getUserProfile: userProfileAction.getUserProfile,
    getUserArticle: userProfileAction.getUserArticle,
    getUserFavArticle: userProfileAction.getUserFavArticle,
    getUserMoreArticle: userProfileAction.getUserMoreArticle,
    handler: userProfileAction.handler
  },dispatch)
}

export default connect(mapStateToProps,mapDisptachToProps)(withStyles(style)(UserProfile))