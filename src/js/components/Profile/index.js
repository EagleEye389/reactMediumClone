import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  withStyles  from '@material-ui/core/styles/withStyles'
import { Redirect } from 'react-router-dom'

import { Authenticate } from '../../common/components/hoc/authenticate' 
import Button from '../../common/components/Button'
import profileAction from '../../actionCreators/profileAction'

import style from './style'

class Profile extends Component {
    state = {
      image: "",
      username: "",
      bio: "",
      password: "",
      email: "",
      id: ""
    }

    componentDidMount() {
      const { tokenValue, getProfile,Handler } = this.props
      getProfile(tokenValue())
      Handler('error',[])
      Handler('success', false)
    }

    componentDidUpdate(prevProps, prevState){
      const { user } = this.props
     if(user && prevState.id != user.id) {
      const { user: {id, image, username,bio, email} } = this.props
        this.setState({
           id,
           image,
           username,
           bio,
           email
        })
     }
    }

    Handler = ($event) => {
      const { name, value }= $event.target
      this.setState({
        [name]: value
      })
    }

    submitHandler = ($event) => {
      $event.preventDefault()
      const { tokenValue, updateProfile, Handler }= this.props
      Handler('error',[])
      const { image, username,bio, email, password } = this.state
      const userObj = {
        image,
        username,
        bio,
        email,
        password
      }
      updateProfile(userObj, tokenValue())
    }
   render(){
     const { isLoggedIn, classes, error, success } = this.props
     const { username, image, password, bio, email } = this.state
     return (
             <div className={classes.box}>
                 { !isLoggedIn && <Redirect to="/auth" />} 
               { error && error.length> 0 && (<div className={classes.error}>
                   { error.map(item => {
                     return <div key={item}>{item}</div>
                   })}
               </div>)}
               { success && <p> Profile Updated Successfully</p>}
                <div className={classes.field}>
                <input 
                   type="text" 
                   name="image" 
                   defaultValue={image} 
                   placeholder="Profile Picture Url"
                   onChange={($event) => this.Handler($event)}
                   />
                </div>
                <div className={classes.field}>
                  <input 
                    type="text" 
                    name="username" 
                    defaultValue={username} placeholder="Username"
                    onChange={($event) => this.Handler($event)}
                    />
                </div>
                <div className={classes.field}> 
                  <textarea 
                    placeholder="Short Bio About You" 
                    name="bio" 
                    defaultValue={bio}
                    onChange={($event) => this.Handler($event)}
                    ></textarea>
                  </div>
                <div className={classes.field}> 
                  <input 
                    type="email" 
                    placeholder="Email Address"  
                    defaultValue={email}  
                    name="email" 
                    onChange={($event) => this.Handler($event)}
                    />
                </div>
                <div className={classes.field}> 
                  <input 
                    type="password" 
                    placeholder="New Password" 
                    name="password" 
                    onChange={($event) => this.Handler($event)}
                    defaultValue={password}/>
                  </div>
                <div className={classes.field}> 
                  <button onClick={($event) => this.submitHandler($event)}>Update Settings</button>
                </div>

             </div>
     )
   }
}

const mapStateToProps = (state, ownprops) => {
  return {
    error:  state.Profile.error,
    user:  state.Profile.user,
    success: state.Profile.success
  }
}
const mapDisptachToProps = (dispatch) => {
  return bindActionCreators({
    getProfile: profileAction.getProfile,
    updateProfile: profileAction.updateProfile,
    Handler:  profileAction.handler,
  },dispatch)
}
export default connect(mapStateToProps,mapDisptachToProps)(Authenticate(
  withStyles(style)(Profile)))