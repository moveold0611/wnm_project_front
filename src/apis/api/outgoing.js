import { async } from "q";
import instance from "../config/instance"

export const getOutgoing = async (productDtlId) => {
    const response = await instance.get(`/api/admin/outgoing/${productDtlId}`);
    return response;
}

export const addOutgoing = async (productDtlId, count) => {
    const response = await instance.post(`/api/admin/outgoing/${productDtlId}/${count}`)
    return response;
}