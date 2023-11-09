import instance from "../config/instance"

export const getUserApi = async (userId) => {
    const response = await instance.get(`/api/user/${userId}`);
    return response;
}

export const deleteUserApi = async (userId) => {
    const response = await instance.delete(`/api/user/${userId}`);
    return response;
}

export const updateUserApi = async (userId, userData) => {
    const response = await instance.put(`/api/user/${userId}`, userData)
    return response;
}