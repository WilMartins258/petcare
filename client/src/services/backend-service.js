import axios from "axios";

/**
 * Futuramente podemos e devemos usar ENV (variável de ambiente) para configurar isso aqui.
 */
const baseURL = "http://localhost:3001/";

const api = axios.create({
  baseURL
});

export default api;
