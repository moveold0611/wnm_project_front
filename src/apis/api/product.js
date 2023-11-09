import instance from "../config/instance"

export const getProductApi = async (productId) => {
    const response = await instance.get(`/api/product/${productId}`);
    return response;
}