import { useQuery } from '@tanstack/react-query';
import axoisInstance from "../../api/axiosInstance";
import React from 'react';

export default function useProdDetails(id) {
    const getProduct = async () => {
        const response = await axoisInstance.get(`/Products/${id}`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['product', 'en', id],
        queryFn: getProduct,
        staleTime: 1000 * 60 * 5,
    })
    return query;
}