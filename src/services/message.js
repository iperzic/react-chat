import { endpoint, token, author, limit, since } from '../config';

export function getMessages() {
  const request = `${endpoint}/?token=${token}${limit ? `&limit=${limit}` : ''}${since ? `&since=${since}` : ''}`;
  return fetch(request)
    .then((response) => {
      if (response.ok) return response.json();

      throw new Error('An error has occurred while fetching messages');
    });
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
    .then((response) => {
      if (response.ok) return response.json();

      throw new Error('An error has occurred while sending new message');
    });
}
