const endpoint = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0';
const token = 'M3K4rhsBr6nm';
const author = 'Igor Perzic';

export function getMessages() {
  return fetch(`${endpoint}/?since=1521096352339&limit=10&token=${token}`)
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
