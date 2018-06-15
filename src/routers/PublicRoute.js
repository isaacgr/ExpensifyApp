import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div>
          <Redirect to ="/dashboard" />
        </div>
      ) : (
        <Component {...props} />
      )
    )}/>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)
