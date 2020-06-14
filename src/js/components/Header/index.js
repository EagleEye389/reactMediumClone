import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link,NavLink, Redirect } from 'react-router-dom'
import { faHome,faBook, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../assests/image/logo.png'
import Button from '../../common/components/Button'
import { Authenticate } from '../../common/components/hoc/authenticate'

import style from './style'



const Header = ({classes,logout, isLoggedIn, username}) => {
  return (
    <div className={classes.box}>
      <div className={classes.logo}>
          <Link to="/"><img src={logo} /></Link>
      </div>
      <div className={classes.text}> Share your ideas</div>
      <div className={classes.option}>
         
           <ul>
             <li><NavLink to="/" ><Button icon={faHome } isVisible text="Home"/></NavLink></li>
             { isLoggedIn && <li><NavLink to="/editor" ><Button icon={faBook } isVisible={isLoggedIn} text="New Article"/> </NavLink></li> }
             { isLoggedIn && <li><NavLink to="/profile" ><Button icon={faUser } isVisible={isLoggedIn} text="Profile"/> </NavLink></li>}
             { ! isLoggedIn && <li><NavLink to="/auth" ><Button icon={faSignOutAlt } isVisible={!isLoggedIn} text="SignIn"/> </NavLink></li> }
             { isLoggedIn && <li className={classes.username}><NavLink to={`/userProfile/${username}`} ><Button isVisible={isLoggedIn} text="My Page"/> </NavLink></li> }
             <li className={classes.log}><NavLink to="#" ><Button icon={faSignOutAlt } isVisible={isLoggedIn} text="Logout" clickHandler={logout}/> </NavLink></li>
           </ul>
        
      </div>
    </div>
    
  )
}
const mapStateToProps = (state, ownprops) => {
  return {
    isLoggedIn: state.Profile.user ||  state.Auth.isLoggedInCheck,
    username:  (state.Profile.user ? state.Profile.user.username :null) || (state.Auth.user ? state.Auth.user.username: null)
  }
}

export default connect(mapStateToProps,null)(withStyles(style)(Header))