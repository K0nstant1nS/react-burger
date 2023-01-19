export default function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(new Error("Ошибка при попытке получить данные"));
}
