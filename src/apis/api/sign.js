import instance from "../config/instance"

export const signupApi = async (signupUser) => {
    const response = await instance.post("/api/auth/signup", signupUser);
    return response;
}