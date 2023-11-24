import instance from "../config/instance"

export const getReviewByProductApi = async (productMstId) => {
    const response = await instance.get(`/api/reviews/product/${productMstId}`);
    return response;
}

export const getReviewByUserApi = async (userId) => {
    const response = await instance.get(`/api/reviews/user/${userId}`);
    return response;
}

export const addReviewApi = async (productMstId) => {
    const response = await instance.post(`/api/review/{productMstId}`);
    return response;
}

export const updateReviewApi = async (reviewId) => {
    const response = await instance.put(`/api/review/{reviewId}`);
    return response;
}

export const removeReviewApi = async (reviewId) => {
    const response = await instance.delete(`/api/review/{reviewId}`);
    return response;
}