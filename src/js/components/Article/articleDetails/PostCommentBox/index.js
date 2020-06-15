import React, {Component} from 'react'
import  withStyles  from '@material-ui/core/styles/withStyles'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

import articleAction from '../../../../actionCreators/articleAction'
import { Authenticate } from '../../../../common/components/hoc/authenticate'

import style from './style'

class PostCommentBox extends Component{
 state = {
    postBody: ''
 }

submitHandler = () =>{
 const { postBody } = this.state
 const { postComment, slug, tokenValue } = this.props
 postComment(postBody, slug, tokenValue() )
 this.setState({
    postBody: ''
 })
}

changeHandler = ($event) => {
  const { value } = $event.target
  this.setState({
     postBody: value,
  })
}

  render(){
   const {classes, isLoggedIn} = this.props
   const { postBody } = this.state
  return (
     isLoggedIn ? (
            <div className={classes.box}>
                     <div className={classes.inputBox}>
                     <textarea rows="4" cols="50" value={postBody} onChange={
                        this.changeHandler
                     } ></textarea>
                     </div>
                     <div className={classes.postButton}>
                        <button className={classes.button} onClick={this.submitHandler}>Post Comment</button>
                     </div>
         </div>) :  (<div className={classes.msg}>
               <p> <NavLink to="/auth">Sign In</NavLink>  or <NavLink to="/auth">Sign Up </NavLink> to post a comment </p>
            </div>   )
    )
 }
}

 const mapDisptachToProps = (dispatch) => {
   return bindActionCreators({
     postComment: articleAction.postComment,
   },dispatch)
 }
export default connect(
   null, mapDisptachToProps
   )(Authenticate(withStyles(style)(PostCommentBox)))