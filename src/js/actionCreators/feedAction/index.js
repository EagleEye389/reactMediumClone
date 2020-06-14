export const FEED_PROCESS = 'FEED_PROCESSS'
export const FEED_SUCCESS = 'FEED_SUCCESS'
export const FEED_FAIL = 'FEED_FAIL'
export const FEED_MORE_PROCESS = 'FEED_MORE_PROCESS'
export const FEED_MORE_SUCCESS = 'FEED_MORE_SUCCESS'
export const HANDLER = 'HANDLER'
export const getFeed = () => {
  return {
    type: FEED_PROCESS,
  }
}

export const fetchMoreFeed =  (offset) => {
  return {
    type: FEED_MORE_PROCESS,
    payload: {
      offset,
    }
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
  getFeed,
  fetchMoreFeed,
  handler
}