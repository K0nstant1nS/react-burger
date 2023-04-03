export default function checkResponse(res:Response):Promise<any> {
  return res.ok
    ? res.json()
    : Promise.reject(new Error("Ошибка при попытке получить данные"));
}
