import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends Component {
    state = {
      isDisabled: true,
      userName: '',
    }

    handleValidationButton = (event) => {
      this.setState({ userName: event.target.value }, () => {
        const { userName } = this.state;
        const minLength = 3;
        const validateForName = userName.length < minLength;
        this.setState({ isDisabled: validateForName });
      });
    }

    saveUserName = async () => {
      const { userName } = this.state;
      const { history } = this.props;
      history.push('/loading');
      await createUser({ name: userName });
      history.push('/search');
    }

    render() {
      const { isDisabled, userName } = this.state;

      return (
        <div data-testid="page-login">

          <form>

            <label htmlFor="login-name-input">
              <input
                type="text"
                data-testid="login-name-input"
                value={ userName }
                onChange={ this.handleValidationButton }
              />
            </label>

            <label htmlFor="login-submit-button">
              <input
                type="button"
                data-testid="login-submit-button"
                disabled={ isDisabled }
                onClick={ this.saveUserName }
                value="Entrar"
              />
            </label>

          </form>
        </div>
      );
    }
}

Login.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Login;
