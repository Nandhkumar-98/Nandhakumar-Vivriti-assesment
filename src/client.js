import axios from "axios";

export async function client(Request) {
  let { header, url, method, body } = Request;

  let Config = {
    ...header,
    data: body,
    url,
    method,
  };

  let response = await axios(Config);

  return response;
}