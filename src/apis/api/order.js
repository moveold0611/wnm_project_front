import instance from "../config/instance"

export const addOrderApi = async (orderData, option) => {
    const response = await instance.post(`/api/order`, orderData, option)
    return response; 
}

export const getUserOrderApi = async (searchData, option) => {
    const response = await instance.get(`/api/orders`, {...option, params: {...searchData}});
    return response
}

export const getUserOrderDetailApi = async (orderId, option) => {
    const response = await instance.get(`/api/order/${orderId}`, option);
    return response
}

export const getOrdersForAdminApi = async (searchData, option) => {
    const response = await instance.get(`/api/admin/orders`, {...option, params: searchData}, option);
    return response;
}

export const getOrdersCountApi = async (searchData, option) => {
    const response = await instance.get(`/api/admin/order/count`, {...option, params: searchData}, option);
    return response;
}

export const updateOrderStatusApi = async (orderId, orderStatus, option) => {
    const response  = await instance.put(`/api/admin/order/${orderId}/${orderStatus}`, null , option);
    return response;
}

export const updateConfirmationApi = async (orderId, option) => {
    const response = await instance.put(`/api/order/${orderId}`, null, option);
    return response;
}

export const getOrderCountApi = async (searchData, option) => {
    const response = await instance.get(`/api/admin/order/count`, {...option, params: searchData}, option);
    return response;
}

