export const USER_FETCH_PROCESS = 'USER_FETCH_PROCESS'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_UPDATE_PROCESS  = 'USER_UPDATE_PROCESS'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_FAIL = 'USER_FAIL'
export const HANDLER ='HANDLER'
export const CLEAR_PROFILE = 'CLEAR_PROFILE'
export const updateProfile = (userObj , tokenValue) => {
  return {
    type: USER_UPDATE_PROCESS,
    payload: {
      userObj,
      tokenValue
    }
  }
}
const getProfile = (tokenValue) => {
  return {
    type: USER_FETCH_PROCESS,
    payload: {
      tokenValue
    }
  }
}
const clearProfile = () => {
  return {
    type: CLEAR_PROFILE
  }
}

export const handler = (property, value) => {
  return {
    type: HANDLER,
    payload: {
      property,
      value
    }
  }
}

export default {
  getProfile,
  updateProfile,
  handler,
  clearProfile
}