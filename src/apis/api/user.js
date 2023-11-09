import instance from "../config/instance"

export const getUserApi = async (userId, option) => {
    const response = await instance.get(`/api/user/${userId}`, option);
    return response;
}

export const deleteUserApi = async (userId, option) => {
    const response = await instance.delete(`/api/user/${userId}`, option);
    return response;
}

export const updateUserApi = async (userId, userData, option) => {
    const response = await instance.put(`/api/user/${userId}`, userData, option)
    return response;
}