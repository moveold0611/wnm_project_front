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

export const getProductsApi = async (searchData) => {
    const response = await instance.get(`/api/products/${searchData.petTypeName}/${searchData.productCategoryName}?option=${searchData.option}&value=${searchData.value}&sort=${searchData.sort}&page=${searchData.pageIndex}`);
    return response;
}

export const updateProduct = async (productId, productData) => {
    const response = await instance.put(`/api/admin/product/${productId}`, productData);
    return response;
}

export const removeProduct = async (productId) => {
    const response = await instance.delete(`/api/admin/product/${productId}`);
    return response;
}