import instance from "../config/instance"

export const addOrderApi = async (orderData, option) => {
    const response = await instance.post(`/api/order`, orderData, option)
    return response; 
}

export const getUserOrderApi = async (searchData, option) => {
    const response = await instance.get(`/api/orders`, {...option, params: {...searchData}});
    return response
}

export const getOrdersForAdmin = async (searchData) => {
    const response = await instance.get(`/api/admin/orders`, {params: searchData});
    return response;
}

export const updateOrderStatus = async (orderId, orderStatus) => {
    const response  = await instance.put(`/api/admin/order/${orderId}/${orderStatus}`);
    return response;
}

export const updateConfirmationApi = async (orderId, option) => {
    const response = await instance.put(`/api/order/${orderId}`, option);
    return response;
}

