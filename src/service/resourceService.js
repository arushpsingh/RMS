import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function addResource(user) {
    const response = await axios.post("/api/resourc", user);
    return response.data;
}

export const getUserResources = async (userId) => {
    const result = await axios.get(`/api/users/${userId}/resourc`);
    return result.data.data;
};
