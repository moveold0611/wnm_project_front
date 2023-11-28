import instance from "../config/instance"

export const getUserApi = async (userId, option) => {
    const response = await instance.get(`/api/user/${userId}`, option);
    return response;
}

export const getUsersApi = async (searchData, option) => {
    const response = await instance.get("/api/admin/users", {...option, params: searchData})
    return response;
}

export const getUserCountApi = async (searchData, option) => {
    const response = await instance.get("/api/admin/user/count", {...option, params: searchData});
    return response;
} 

export const updateUserApi = async (userId, userEditData, option) => {
    const response = await instance.put(`/api/user/${userId}`,userEditData, option)
    return response;
}

export const deleteUserApi = async (userId, option) => {
    const response = await instance.delete(`/api/user/${userId}`, option);
    return response;
}

export const deleteAdminToUserApi = async (userId, option) => {
    const response = await instance.delete(`/api/admin/user/${userId}`, option);
    return response;
}
