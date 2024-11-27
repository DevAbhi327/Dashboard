import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const userVerificationApiBaseUrl = `${backendConfig.base}v1/superAdmin/userVerification`;

export async function getDetailsByUserId(id) {
    const response = await axios.get(
        `${userVerificationApiBaseUrl}/details/${id}`,
    );
    return response?.data;
}

export async function getAllUserForVerification() {
    const response = await axios.get(
        `${userVerificationApiBaseUrl}/getAllUserForVerification`,
    );
    return response?.data?.content;
}

export async function rejectUserVerification(id, msg) {
    const response = await axios.put(
        `${userVerificationApiBaseUrl}/reject/${id}?reason=${msg}`,
    );
    return response;
}
export async function approvedUserVerification(id) {
    const response = await axios.put(
        `${userVerificationApiBaseUrl}/accept/${id}`,
    );
    return response;
}


