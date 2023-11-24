import { async } from "q";
import instance from "../config/instance"

export const writeAnnouncementApi = async (data, option) => {
    const response = await instance.post(`/api/admin/announcement`, data, option);
    return response;
}

export const getAnnouncementsApi = async () => {
    const response = await instance.get(`/api/allannouncement`);
    return response;
}

export const getAnnouncementByIdApi = async (announcementId) => {
    const response = await instance.get(`/api/announcement/${announcementId}`);
    return response;
}