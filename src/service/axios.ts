import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function getAPIClient(ctx?: any) {
  const { token } = ctx;
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@ibeer.token", token);
    } catch (e) {
      // saving error
    }
  };

  const api = axios.create({
    baseURL: "https://back-ibeer.herokuapp.com/api/v1",
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
  return api;
}
