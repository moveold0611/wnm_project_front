import React, { useState, useEffect } from 'react';
import { getReviewByUserApi, getReviewByProductApi } from '../../apis/api/review';

const ReviewList = ({ userId, productMstId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            let response;

            if (userId) {
            response = await getReviewByUserApi(userId);
            } else if (productMstId) {
            response = await getReviewByProductApi(productMstId);
            }
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
        };

        fetchData();
    }, [userId, productMstId]);

    return (
        <div>
        <h2>전체 리뷰 목록</h2>
        <ul>
            {reviews.map((review) => (
            <li key={review.id}>
                {review.content}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ReviewList;