import { async } from "q";
import instance from "../config/instance"

export const getIncoming = async (productDtlId) => {
    const response = await instance.get(`/api/admin/incoming/${productDtlId}`);
    return response;
}

export const addIncoming = async (productDtlId, count) => {
    const response = await instance.post(`/api/admin/incoming/${productDtlId}/${count}`)
    return response;
}