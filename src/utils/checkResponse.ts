export default function checkResponse(res:Response) {
  return res.ok
    ? res.json()
    : Promise.reject(new Error("Ошибка при попытке получить данные"));
}
