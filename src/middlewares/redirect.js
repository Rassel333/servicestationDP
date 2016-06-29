import { hashHistory } from 'react-router'



export const redirect = store => next => action => { //eslint-disable-line no-unused-vars
  if (action.type === 'ROUTING') {
    hashHistory[action.payload.method](action.payload.nextUrl)
  }

  return next(action)
}
