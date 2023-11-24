import { async } from "q";
import instance from "../config/instance"

export const getIncoming = async (productDtlId, option) => {
    const response = await instance.get(`/api/admin/incoming/${productDtlId}`, option);
    return response;
}

export const addIncoming = async (productDtlId, count, option) => {
    const response = await instance.post(`/api/admin/incoming/${productDtlId}/${count}`,null , option)
    return response;
}