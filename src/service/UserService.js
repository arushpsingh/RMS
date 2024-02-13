import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function signUp(user) {
    console.log("user", user);
    const response = await axios.post(`${BASE_URL}/api/users`, user);
    return response.data;
}

export async function login(data) {
    const response = await axios.post("/api/login", data);
    return response.data;
}
