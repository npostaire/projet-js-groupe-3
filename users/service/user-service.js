import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.0/esm/axios.min.js";
import { USERS_URI } from "../../constants.js";

class UserService {
  constructor(axios) {
    this.client = axios;
  }

  async fetchAll() {
    const response = await this.client.get(
      `?apiKey=566ec926-471e-11ee-be56-0242ac120002`
    );
    return response.data;
  }

  async fetchById(id) {
    const response = await this.client.get(`${USERS_URI}/${id}?apiKey=566ec926-471e-11ee-be56-0242ac120002`);
    return response.data;
  }
  
}

export const userService = new UserService(
  axios.create({ baseURL: USERS_URI })
);
