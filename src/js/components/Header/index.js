import React, { useEffect, useState} from 'react'
import { withStyles }  from '@material-ui/styles'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import  { faHome, faBook, faUser, faSignOutAlt, faIdBadge , faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from "classnames";


import logo from '../../../assests/image/logo.png'
import Button from '../../common/components/Button'

import style from './style'

const MOBILE_WIDTH = 768;

const Header = ({classes,logout, isLoggedIn, username}) => {
const [isOpen, isOpenHandler ] =  useState(false);
const [isMobile, isMobileHandler] =  useState(false);


useEffect(() => {

  function handleResize() {
    const width = window.screen.width;
    console.log('width', width);
    console.log('isOpen ', isOpen);
    console.log('isMobile ', isMobile);
    if(width <= MOBILE_WIDTH){
      isMobileHandler(true);
    } else {
      isMobileHandler(false);
    }
  }
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize) }
  
}, [isOpen])


  return (
    
    <div className={classes.box}>
      <div className={classes.header}>
          <div className={classes.logo}>
            <NavLink to="/"><img src={logo} /></NavLink>
            <div className={classes.text}> Share your ideas</div>
           </div>
     
         { isMobile && <div className={classNames(`${classes.Icon}`)} onClick={() =>isOpenHandler(!isOpen)}>
              <FontAwesomeIcon icon={faBars} /> 
          </div> 
          }
      </div>
      
      <div className={` ${isMobile ?  classes.optionMobile : classes.optionDesktop }  ${isOpen ?  classes.mobile : ''}`} >
      
      { isMobile && <div className ={classes.Icon} onClick={() =>isOpenHandler(!isOpen)} >
           <FontAwesomeIcon icon={faTimes} /> 
        </div>
       }
           <ul  onClick={() =>isOpenHandler(!isOpen)}>
             <li><NavLink to="/" ><Button icon={faHome } isVisible text="Home"/></NavLink></li>
             { isLoggedIn && <li><NavLink to="/editor" ><Button icon={faBook } isVisible={isLoggedIn} text="New Article"/> </NavLink></li> }
             { isLoggedIn && <li><NavLink to="/profile" ><Button icon={faUser } isVisible={isLoggedIn} text="Profile"/> </NavLink></li>}
             { ! isLoggedIn && <li><NavLink to="/auth" ><Button icon={faSignOutAlt } isVisible={!isLoggedIn} text="SignIn"/> </NavLink></li> }
             { isLoggedIn && <li className={classes.username}><NavLink to={`/userProfile/${username}`} ><Button icon={faIdBadge} isVisible={isLoggedIn} text="My Page"/> </NavLink></li> }
             <li className={classes.log}><NavLink to="#" ><Button icon={faSignOutAlt } isVisible={isLoggedIn} text="Logout" clickHandler={logout}/> </NavLink></li>
           </ul>
        
      </div>
    </div>
    
  )
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.Profile.user ||  state.Auth.isLoggedInCheck,
    username:  (state.Profile.user ? state.Profile.user.username :null) || (state.Auth.user ? state.Auth.user.username: null)
  }
}

export default connect(mapStateToProps,null)(withStyles(style)(Header))