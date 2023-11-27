import instance from "../config/instance"

export const writeAnnouncementApi = async (data, option) => {
    const response = await instance.post(`/api/admin/announcement`, data, option);
    return response;
}

export const getAnnouncementsApi = async () => {
    const response = await instance.get(`/api/announcement/all`);
    return response;
}
export const getAnnouncementsCountApi = async () => {
    const response = await instance.get(`/api/announcement/count`);
    return response;
}

export const getAnnouncementByIdApi = async (announcementId) => {
    const response = await instance.get(`/api/announcement/${announcementId}`);
    return response;
}

export const editAnnouncementApi = async (announcementId, announcementData, option) => {
    console.log(announcementId)
    const response = await instance.put(`/api/admin/announcement/${announcementId}`, announcementData, option)
    return response;
}

export const deleteAnnouncementApi = async (announcementId, option) => {
    const response = await instance.delete(`/api/admin/announcement/${announcementId}`, option)
    return response;
}