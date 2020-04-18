import React from 'react';
import { Route } from 'react-router-dom';
import Signin from '../../components/Signin/Signin';
import Signup from '../../components/Signup/Signup';

function Register() {
  return (
    <div>
      <Route exact path='/signin' render={() => <Signin />} />
      <Route exact path='/signup' render={() => <Signup />} />
    </div>
  );
}

export default Register;
