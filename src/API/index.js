import checkResponse from "../utils/checkResponse";

const dataBaseAddres = "https://norma.nomoreparties.space/api";

export default class Api {
  static async request(additionalAddres, options = {}) {
    return await fetch(`${dataBaseAddres}${additionalAddres}`, options).then(
      (res) => checkResponse(res)
    );
  }

  static async getIngredients() {
    return await this.request("/ingredients");
  }

  static async makeOrder(idsArr) {
    return await this.request("/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: idsArr }),
    });
  }
}
