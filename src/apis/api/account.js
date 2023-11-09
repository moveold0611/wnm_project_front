import instance from "../config/instance"

export const getPrincipalApi = async () => {
    const response = await instance.get("/account/principal")
    return response;
}