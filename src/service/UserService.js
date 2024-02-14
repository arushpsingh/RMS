import axios from "axios";

export async function signUp(user) {
    console.log("user", user);
    const response = await axios.post(`/api/signup`, user);
    return response.data;
}

export async function login(data) {
    const response = await axios.post("/api/login", data);
    return response.data;
}
