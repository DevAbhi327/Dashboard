import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const eventsApiBaseUrl = `${backendConfig.base}v1/events`;

export async function createEventApi(payload) {
    const response = await axios.post(
        `${eventsApiBaseUrl}`,
        payload
    );
    return response.data;
}
