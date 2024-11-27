import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const dashboardApiBaseUrl = `${backendConfig.base}v1/dashboard-api`;

export async function getAllRecentSubscriptions() {
  const response = await axios.get(
    `${dashboardApiBaseUrl}/getAllRecentSubscriptions`
  );
  return response?.data?.content;
}
export async function getUserByReligion() {
  const response = await axios.get(
    `${dashboardApiBaseUrl}/userByReligion`
  );
  return response?.data;
}


