import handlerResponse from './handlerRes'

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }

  postEmail(data) {
    return fetch(`${this.address}/api/emails`, {
      method: "POST",
      headers: this.headres,
      body: JSON.stringify({
        "data": data
      })
    })
      .then(handlerResponse)
  }
}

const api = new Api({
  address: "https://api.bioknow.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api