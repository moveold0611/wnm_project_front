import instance from "../config/instance"

export const addOrderApi = async (orderData, option) => {
    const response = await instance.post(`/api/order`, orderData, option)
    return response; 
}