import React, { Component, lazy, Suspense } from 'react'
import {
  Switch,
  Route,
  Redirect,
  Router,
} from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Header from '../components/Header'
import profileAction from '../actionCreators/profileAction'
import loginAction from '../actionCreators/loginAction'

import  './app.css'

const Login =  lazy(() => import('./Login'));
const Home =  lazy(() => import('../components/Home'));
const ArticleDetails = lazy(() => import('../components/Article/articleDetails'));
const NewArticle = lazy(() => import('../components/Article/newArticle'));
const EditArticle = lazy(() => import('../components/Article/editArticle'));
const Profile = lazy(() => import('../components/Profile'));
const UserProfile = lazy(() => import('../components/userProfile'));
const LoadingMessage = () => (
  "...fetching"
  )

class App extends Component {
    state = {
    logout: false,
  }
  logout = () =>{
    const { clearProfile, clearUser } = this.props
    window.localStorage.removeItem('token')
    clearProfile()
    clearUser()
    this.setState({
      logout: true
    })
  }

  componentDidMount() {
    const { getProfile } = this.props
    const token = window.localStorage.getItem('token')
    if(token !== null){
      getProfile(token)
    }
  }

  componentDidUpdate(prevProps, prevState){
    const { logout } = this.state
    if(prevState.logout !== logout){
      this.setState({
        logout: false
      })
    }
  }


  render() {
    const { logout } = this.state
      return (
        <div className="container">
          { logout && <Redirect to="/" />}
          <div className="header">
             < Header logout={this.logout} />
          </div>
          
          <div className="content">
          <Suspense fallback={<div>Loading... </div>}>
          <Switch>
             <Route exact  path="/" component={Home} />
             <Route  path="/auth"  component={Login}/>
             <Route  path="/article/:slug" component={ArticleDetails} />
             <Route path="/editor" component={NewArticle} />
             <Route path="/articleEditor/:slug" render={(props) => <EditArticle {...props}  isEdit={true}/>} />
             <Route path="/profile" component={Profile} />
             <Route exact path="/userProfile/:username" component={UserProfile} />
             <Redirect to='/' />
           </Switch>
           </Suspense>
           </div>
           <div className="footer">
              @copyright deepak gupta
           </div>
        </div>
      )
  }
}

const mapDisptachToProps = (dispatch) => {
  return bindActionCreators({
    getProfile: profileAction.getProfile,
    clearProfile: profileAction.clearProfile,
    clearUser: loginAction.clearUser
  },dispatch)
}

export default connect(null,mapDisptachToProps)(App)