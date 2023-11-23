import instance from "../config/instance"

export const writeAnnouncementApi = async (data, option) => {
    const response = await instance.post(`/api/announcement`, data, option);
    return response;
}