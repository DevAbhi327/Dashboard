import axios from "axios";
import { backendConfig } from "../constants/contents/mainContent";

const superAdminApiBaseAUrl = backendConfig.base + "v1/superAdmin";

export async function loginApi(payload) {
  const response = await axios.post(
    `${superAdminApiBaseAUrl}/login?username=${payload.username}&password=${payload.password}`
  );
  return response.data;
}

const forgotApiBaseUrl = backendConfig.base + "v1/forget-password";

export async function resetPasswordByMobileNo(payload) {
  const response = await axios.post(`${forgotApiBaseUrl}/sendSmsOtp?mobileNo=${payload.mobileNo}`);
  return response.data;
}
export async function verifyOtpResetPasswordByMobileNo(payload) {
  const response = await axios.post(
    `${forgotApiBaseUrl}/verifySmsOtp?mobileNo=${payload.mobileNo}&otp=${payload.otp}`
  );
  return response.data;
}
export async function updatePasswordByMobileNo(payload) {
  const response = await axios.post(
    `${forgotApiBaseUrl}/updatePassword?mobileNo=${payload.mobileNo}&password=${payload.password}`,
  );
  return response.data;
}
