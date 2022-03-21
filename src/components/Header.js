import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthorized);
  console.log(isAuth);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="header">
      <ul style={{ listStyle: 'none' }}>
        {!isAuth && (
          <li>
            <form onSubmit={loginHandler}>
              <input type="text" name="username" />
              <input
                type="password"
                name="password"
                style={{ marginLeft: '15px' }}
              />
              <button style={{ marginLeft: '15px' }} type="submit">
                login
              </button>
            </form>
          </li>
        )}

        {isAuth && (
          <li>
            <button onClick={logoutHandler}>logout</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
