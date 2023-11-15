import instance from "../config/instance"

export const addToCartApi = async (userId, addToCart, option) => {
    const response = await instance.post(`/api/cart/${userId}`, addToCart, option)
    return response;
}

export const getCartApi = async (userId, option) => {
    const response = await instance.get(`/api/cart/${userId}`, option)
    return response;
}

export const deleteCartApi = async (cartId, option) => {
    const response = await instance.delete(`/api/cart/${cartId}`, option)
    return response;
}