import axios from "axios";

export async function addResource(user) {
    const response = await axios.post("/api/resource", user);
    return response.data;
}

export const getUserResources = async (userId) => {
    const result = await axios.get(`/api/users/${userId}/resource`);
    return result.data.data;
};
