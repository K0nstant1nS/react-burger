import checkResponse from "../utils/checkResponse";
import { getCookie, setCookie } from "../utils";

const dataBaseAddres = "https://norma.nomoreparties.space/api";
const authAddres = "/auth/login";
const regAddres = "/auth/register";
const userAddres = "/auth/user";
const resetPasswordAddres = "/password-reset";
const confirmPasswordResetAddres = "/password-reset/reset";
const logoutAddres = "/auth/logout";
const tokenAddres = "/auth/token";

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
        authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify({ ingredients: idsArr }),
    });
  }

  static async registerUser(data) {
    return await this.request(regAddres, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  static async loginRequest(data) {
    return this.request(authAddres, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  static async getUserRequest() {
    return await this.request(userAddres, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
  }

  static async resetPasswordRequest(form) {
    return await this.request(resetPasswordAddres, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  }

  static async confirmPasswordResetRequest(form) {
    return await this.request(confirmPasswordResetAddres, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  }

  static async refreshTokenRequest(refreshToken) {
    return await this.request(tokenAddres, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    }).then((data) => {
      console.log("refresh");
      setCookie("accessToken", data.accessToken.split("Bearer ")[1], {
        path: "/",
      });
      setCookie("refreshToken", data.refreshToken, { path: "/" });
    });
  }

  static async logoutRequest(refreshToken) {
    return await this.request(logoutAddres, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    });
  }

  static async patchUserRequest(form) {
    return await this.request(userAddres, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(form),
    });
  }
}
