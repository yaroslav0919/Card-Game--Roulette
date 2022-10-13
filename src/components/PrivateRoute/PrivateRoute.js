import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ login, path, component: Component }) => {
  return (
    <Route
      exact path={path} render={() => (
        login === true
          ? <Component />
          : <Redirect to='/login' />
      )}
    />
  )
}

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
  login: PropTypes.bool
}

export default PrivateRoute
