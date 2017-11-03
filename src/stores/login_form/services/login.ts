import { config } from '../config/config'

export const loginService = {
  login
}

function login(email, password): Promise<Response> {
  const requestOptions = {
    method: 'POST',
    headers: [['Content-Type', 'application/json'], ['Accept', 'application/json']],
    body: JSON.stringify({
      user: { email: email, password: password, remember_me: true }
    })
  };

  return fetch(`${config.backend_url}/users/sign_in.json`, requestOptions)
    .catch(() => {
      return Promise.reject('Backend not reachable');
    })
    .then(function (response: Response): any {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }

      return (response.headers.get('Authorization') || '').split(' ')[1];
    })
}