import React, { Component } from 'react';
import { config } from '../config/config'

interface IState {
  secretContent?: string;
}

class Secret extends Component<object, IState> {

  constructor(props: object) {
    super(props);
    this.state = { secretContent: '' };
  }

  public componentDidMount() {
    const token = localStorage.getItem('token');

    const requestOptions = {
      method: 'GET',
      headers: [['Content-Type', 'application/json'], ['Accept', 'application/json'], ['Authorization', `Bearer ${token}`]],
    };

    const onFetch = (response: Response) => {
      if (response.ok) {
        response.text().then( text => this.setState({secretContent: text}))
      }
    }

    fetch(`${config.backend_url}/secrets`, requestOptions).then(onFetch)
  }

  public render() {
    return(
      <div>So the secret is<pre>{this.state.secretContent}</pre></div>
    )
  }
}

export default Secret;