import instance from "../config/instance"

export const getProductApi = async (productId) => {
    const response = await instance.get(`/api/product/${productId}`);
    return response;
}

export const getSearchedProductsApi = async (searchData) => {
    // const response = await instance.get(`/api/products/${petType}/${productCategory}/?option=${searchOption}&value=${value}&sort=${sort}&page=${page}`);
    const response = await instance.get(`/api/products/${searchData.petType}/${searchData.productCategoryName}?option=제목&value=&sort=${searchData.sort}&page=1`);
    return response;
}

export const addProductApi = async (product, option) => {
    const response = await instance.post(`/api/admin/product/`, product, option);
    return response;
} 

export const getProductsApi = async (searchData) => {
    console.log(searchData)
    const response = await instance.get(`/api/admin/products`, {params: searchData});
    return response;
}

export const updateProductApi = async (productId, productData) => {
    const response = await instance.put(`/api/admin/product/${productId}`, productData);
    return response;
}

export const removeProductApi = async (productId) => {
    const response = await instance.delete(`/api/admin/product/${productId}`);
    return response;
}