import { getAllRecentSubscriptions, getUserByReligion } from "../api/dashboard-api";

export async function fetchRecentSubscriptions() {
  try {
    const recentSubscription = await getAllRecentSubscriptions();
    return recentSubscription?.data;
  } catch (error) {
    console.log(error?.response?.data?.message)
  }
}


export async function fetchUserByReligion(){
    try {
        const users = await getUserByReligion();
        return users;
      } catch (error) {
        console.log(error?.response?.data?.message)
      }
}