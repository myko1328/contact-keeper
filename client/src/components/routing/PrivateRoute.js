import React from 'react'
import Spinner from '../layout/Spinner'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../../actions/userActions'
//import { useAuth } from '../../context/auth/AuthState';

const PrivateRoute = ({
  isAuthenticated,
  loading,
  loadUser,
  component: Component,
  ...rest
}) => {
  // const [authState] = useAuth();
  // const { isAuthenticated, loading } = authState;
  if (localStorage.token) {
    loadUser()
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  loading: state.users.loading,
})

export default connect(mapStateToProps, { loadUser })(PrivateRoute)
