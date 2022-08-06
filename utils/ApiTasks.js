import handlerResponse from './handlerRes'

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }

  getTasks() {
    return fetch(`${this.address}/api/tasks`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getTask(id) {
    return fetch(`${this.address}/api/tasks/${id}`, {
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