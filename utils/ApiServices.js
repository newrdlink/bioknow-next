import handlerResponse from './handlerRes'

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }

  getServices() {
    return fetch(`${this.address}/api/services`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getService(id) {
    return fetch(`${this.address}/api/services/${id}`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }
}

//создаем экземпляр
const api = new Api({
  address: "https://api.bioknow.ru",
  headers: {
    // "Contetnt-Type": "multipart/form-data",
    "Content-Type": "application/json",
  },
});

export default api