import checkResponse from "../utils/checkResponse";
import { getCookie } from "../utils";

const dataBaseAddres = "https://norma.nomoreparties.space/api";
const authAddres = "https://norma.nomoreparties.space/api/auth/login";
const regAddres = "https://norma.nomoreparties.space/api/auth/register";
const getUserAddres = "https://norma.nomoreparties.space/api/auth/user";
const logoutAddres = "https://norma.nomoreparties.space/api/auth/logout";
const tokenAddres = "https://norma.nomoreparties.space/api/auth/token";

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

  static async registerUser(data) {
    return await fetch(regAddres, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => checkResponse(res));
  }

  static async loginRequest(data) {
    return await fetch(authAddres, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => checkResponse(res));
  }

  static async getUserRequest() {
    return await fetch(getUserAddres, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }).then((res) => checkResponse(res));
  }
}
