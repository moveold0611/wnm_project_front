import instance from "../config/instance"

export const getProductApi = async (productId) => {
    const response = await instance.get(`/api/product/${productId}`);
    return response;
}

export const getProductsApi = async (petType, productCategory, searchOption, value, sort, page) => {
    // const response = await instance.get(`/api/products/${petType}/${productCategory}/?option=${searchOption}&value=${value}&sort=${sort}&page=${page}`);
    const response = await instance.get(`/api/products/${petType}/all?option=제목&value=&sort=낮은가격&page=1`);
    return response;
}

export const addProductApi = async (product, option) => {
    const response = await instance.post(`/api/admin/product/`, product, option);
    return response;
} 

export const addCartApi = async (userId, product, option) => {
    const response = await instance.post(`/api/cart/${userId}`, product, option);
    return response;
} 