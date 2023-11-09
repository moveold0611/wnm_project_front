import instance from "../config/instance"

export const getPrincipalApi = async (option) => {
    const response = await instance.get("/account/principal", option)
    return response;
}