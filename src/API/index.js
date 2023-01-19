const dataBaseAddres = "https://norma.nomoreparties.space/api";

export default class Api {
  static async getData(additionalAddres) {
    return await fetch(`${dataBaseAddres}${additionalAddres}`).then((res) => {
      return res.ok
        ? res.json()
        : Promise.reject(new Error("Ошибка при попытке получить данные"));
    });
  }

  static async postData(additionalAddres, data) {
    return await fetch(`${dataBaseAddres}${additionalAddres}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.ok
        ? res.json()
        : Promise.reject(new Error("Ошибка при попытке получить данные"));
    });
  }

  static async getIngredients() {
    return await this.getData("/ingredients");
  }

  static async makeOrder(idsArr) {
    return await this.postData("/orders", { ingredients: idsArr });
  }
}
