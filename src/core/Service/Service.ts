import { BASE_URL } from "@env";
import axios from "axios";
export function Service() {
  const api = axios.create({
    baseURL: BASE_URL,
  });

  return {
    api,
  };
}
