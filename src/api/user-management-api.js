import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const userApiBaseUrl = `${backendConfig.base}v1/users`;

export async function createUsersPlan(payload) {
    const response = await axios.post(
        `${userApiBaseUrl}/plan`,
        payload
    );
    return response.data;
}


