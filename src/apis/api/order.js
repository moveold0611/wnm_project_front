import instance from "../config/instance"

export const addOrderApi = async (orderData, option) => {
    const response = await instance.post(`/api/order`, orderData, option)
    return response; 
}

export const getOrders = async (searchData, option) => {
    console.log(1)
    const response = await instance.get("/api/orders", {params: searchData}, option)
    return response
}