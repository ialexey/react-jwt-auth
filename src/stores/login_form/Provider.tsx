import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure'
import Form from './components/Form'

class LoginForm extends Component {

  public store = (): object => {
    const store = Object.assign({}, this.props);
    return configureStore(store);
  }

  public render(): JSX.Element {
    return (
      <Provider store={this.store()}>
        <Form />
      </Provider >
    );
  }
}

export default LoginForm;
