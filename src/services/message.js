import { endpoint, token, author, limit, since } from '../config';

export function getMessages() {
  const request = `${endpoint}/?token=${token}${limit ? `&limit=${limit}` : ''}${since ? `&since=${since}` : ''}`;
  return fetch(request)
    .then(response => response.json());
}

export function sendMessage(message) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      token,
    },
    body: JSON.stringify({ message, author }),
  })
    .then(response => response.json());
}
