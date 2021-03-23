import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://my-json-server.typicode.com/RaySkelen/demo/",
  withCredentials: true,
  headers: {},
});

const getAPI = {
  getConfig() {
    return instance.get("config").then((response) => {
      return response.data;
    });
  },
  getData() {
    return instance.get("data").then((response) => {
      return response.data;
    });
  },
  getGameState() {
    return instance.get("gameState").then((response) => {
      return response.data;
    });
  },
};

export default getAPI;
