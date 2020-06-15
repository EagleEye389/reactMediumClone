import React, { Component} from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import  withStyles  from '@material-ui/core/styles/withStyles'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import loginAction from '../../actionCreators/loginAction'
import { Authenticate } from '../../common/components/hoc/authenticate'
import login from '../../../assests/image/login.jpg'
import logout from '../../../assests/image/logout.jpg'

import styles from './style'

class Login extends Component {
  state = {
    loginView: true,
    signIn: {
      username: null,
      password:  null
    },
    signUp: {
      username: null,
      password: null,
      email: null,
    },
  }

   renderError = (error) => {
    
     if(error && error.length){
      return (
        <ul>
          {error.map(item => <li key={item}>{item}</li>)}
        </ul>
      )
     }
      
   }

   toggleView = () => {
     const { loginView } =  this.state
     const { cleanError } = this.props
     this.setState({
         loginView:  !loginView,
     }, () => {
      cleanError()
     })

   }

   onSubmit = ($event, type) => {
     $event.preventDefault()
     const { cleanError } = this.props
     cleanError()
     if (type === 'login') {
        const { signIn: {username, password} } = this.state
        if(username && password){
          const { loginMethod } = this.props
          loginMethod(username, password)
        }
     }
     else {
       const { signUp: {username, password, email} } = this.state
        if(username && password && email){
          const { registerMethod } = this.props
          registerMethod(email,username, password)
        }
     }
   }


   handleInputChange = ($event,object, target) => {
      const { value, name } = $event.target
      const data = this.state[object]
      this.setState({
        [object]: {
          ...data,
          [target]: value,
        },
      })
   }

   render() {
     const { classes, error, isLoggedInCheck, loggedIn, isCheck } = this.props
     const { loginView, signIn, signUp, isError } = this.state
     return (
      
       <div className={classes.container}>
       { (isLoggedInCheck || isCheck) && <Redirect to="/" /> } 
         <div className={classes.box}>
          { loginView ? <div className={classnames(classes.user, classes.signInBx)}>
                <div className={classes.imgBx}>
                    <img src={login} />
                  </div> 
                    <div className={classes.formBx}>
                      <form onSubmit={($event) => this.onSubmit($event,'login')}>
                        <h2>Sign In</h2>
                        <input type="email" name={signIn.username} placeholder="email" required  onChange={($event)=>this.handleInputChange($event,'signIn','username')} />
                        <input type="password" name={signIn.password} placeholder="password" required onChange={($event)=>this.handleInputChange($event,'signIn','password')}/>
                        <input type="submit" name="" value="Login"  />
                        <p className={classes.signUp}>Don't have account ?  <a href="#" onClick={
                          this.toggleView
                        }>SignUp</a></p>
                         <div className={classes.errorBox}>
                           {this.renderError(error)}
                        </div>
                      </form>
                      </div>
                </div> : 
                <div className={classnames(classes.user, classes.signUpBx)}>
               
                    <div className={classes.formBx}>
                      <form onSubmit={($event) => this.onSubmit($event,'register')}>
                        <h2>Create An account</h2>
                        <input type="email" name={signUp.email} placeholder="email" required onChange={($event)=>this.handleInputChange($event,'signUp','email')} />
                        <input type="text" name={signUp.username} placeholder="username" required  onChange={($event)=>this.handleInputChange($event,'signUp','username')}/>
                        <input type="password" name={signUp.password} placeholder="create password" required onChange={($event)=>this.handleInputChange($event,'signUp','password')}/>
                        <input type="submit" name="" value="Register" />
                        <p className={classes.signUp}>Already have an account ?  <a href="#"  onClick={
                          this.toggleView} >SignIn</a></p>
                        <div className={classes.errorBox}>
                           {this.renderError(error)}
                        </div> 
                      </form>
                      </div>
                     
                      <div className={classes.imgBx}>
                         <img src={logout} />
                      </div> 
                  </div>
          } 
           
                </div>
           </div>)
     
     
   }
}
const mapStateToProps = (state, ownprops) => {
  return {
    error:  state.Auth.error,
    isLoggedInCheck:  state.Auth.isLoggedInCheck,
    isCheck: state.Profile.isCheck
  }
}
const mapDisptachToProps = (dispatch) => {
  return bindActionCreators({
    loginMethod: loginAction.loginProcess,
    cleanError: loginAction.clearError,
    registerMethod: loginAction.registerProcess
  },dispatch)
}
export default withStyles(styles)(connect(
  mapStateToProps,
  mapDisptachToProps
)(Authenticate(Login)))