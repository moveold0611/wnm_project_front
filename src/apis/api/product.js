import instance from "../config/instance"

export const getProductApi = async (productDtlId) => {
    const response = await instance.get(`/api/product/detail/${productDtlId}`);
    return response;
}

export const getProductMstApi = async(productMstId) => {
    const response = await instance.get(`/api/product/master/${productMstId}`)
    return response;
}


export const addProductApi = async (product, option) => {
    const response = await instance.post(`/api/admin/product`, product, option);
    return response;
} 

export const getProductsApi = async (searchData) => {
    const response = await instance.get(`/api/products/sizes`, {params: searchData});
    return response;
}

export const getAllProductsApi = async (searchData) => {
    const response = await instance.get(`/api/products/minmax`, {params: searchData});
    return response;
}

export const getProductsCountApi = async (searchData) => {
    const response = await instance.get(`/api/products/count`, {params: searchData});
    return response;
}

export const updateProductApi = async (productId, productData, option) => {
    const response = await instance.put(`/api/admin/product/${productId}`, productData, option);
    return response;
}

export const removeProductApi = async (productId, option) => {
    const response = await instance.delete(`/api/admin/product/${productId}`, option);
    return response;
}