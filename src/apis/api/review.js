import instance from "../config/instance"

export const getReviewByProductApi = async (productMstId, option) => {
    const response = await instance.get(`/api/reviews/product/${productMstId}`, option);
    return response;
}

export const getReviewByUserApi = async (userId, option) => {
    const response = await instance.get(`/api/reviews/user/${userId}`, option);
    return response;
}

export const addReviewApi = async (review, option) => {
    const response = await instance.post(`/api/review`, review, option);
    return response;
}

export const updateReviewApi = async (reviewData, option) => {
    const response = await instance.put(`/api/review/${reviewData.reviewId}`, reviewData, option);
    return response;
}

export const removeReviewApi = async (reviewId, option) => {
    const response = await instance.delete(`/api/review/${reviewId}`, option);
    return response;
}