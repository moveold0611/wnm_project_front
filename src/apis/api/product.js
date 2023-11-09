import instance from "../config/instance"

export const getProductApi = async (productId) => {
    const response = await instance.get(`/api/product/${productId}`);
    return response;
}

export const addProductApi = async (product, option) => {
    const response = await instance.post(`/api/admin/product/`, product, option);
    return response;
} 