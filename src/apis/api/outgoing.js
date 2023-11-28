import { async } from "q";
import instance from "../config/instance"

export const getOutgoingApi = async (productDtlId, option) => {
    const response = await instance.get(`/api/admin/outgoing/${productDtlId}`, option);
    return response;
}

export const addOutgoingApi = async (productDtlId, count, option) => {
    const response = await instance.post(`/api/admin/outgoing/${productDtlId}/${count}`,null , option)
    return response;
}