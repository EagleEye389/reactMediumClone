import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom'

import { Authenticate } from '../../common/components/hoc/authenticate' 

import style from './style'


class TagList extends Component {
  
   
   render(){
     const {classes } = this.props
     return (
             <div className={classes.box}>
                <button>Tags</button>
             </div>
     )
   }
}

// const mapStateToProps = (state, ownprops) => {
//   return {
//     error:  state.Profile.error,
//     user:  state.Profile.user
//   }
// }
// const mapDisptachToProps = (dispatch) => {
//   return bindActionCreators({
//     getProfile: profileAction.getProfile,
//     updateProfile: profileAction.updateProfile,
//     Handler:  profileAction.handler,
//   },dispatch)
// }
export default connect(null,null)(Authenticate(
  withStyles(style)(TagList)))