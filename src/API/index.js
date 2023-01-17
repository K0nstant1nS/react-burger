const dataBaseAddres = "https://norma.nomoreparties.space/api";

export default class Api {
  static async getData(additionalAddres) {
    return await fetch(`${dataBaseAddres}${additionalAddres}`).then((res) => {
      return res.ok
        ? res.json()
        : res.json().then((err) => Promise.reject(err));
    });
  }

  static async getIngredients() {
    return await this.getData("/ingredients");
  }
}
