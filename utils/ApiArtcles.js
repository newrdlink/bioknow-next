import handlerResponse from './handlerRes'

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }

  getArticles() {
    return fetch(`${this.address}/api/articles`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getArticle(id) {
    return fetch(`${this.address}/api/articles/${id}`, {
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