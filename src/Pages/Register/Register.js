import React from 'react';
import { Route } from 'react-router-dom';
import Signin from '../../components/Signin/Signin';
import Signup from '../../components/Signup/Signup';

function Register({ handleSignin }) {
  return (
    <div>
      <Route
        exact
        path='/signin'
        render={() => <Signin handleSignin={handleSignin} />}
      />
      <Route
        exact
        path='/signup'
        render={() => <Signup handleSignin={handleSignin} />}
      />
    </div>
  );
}

export default Register;
