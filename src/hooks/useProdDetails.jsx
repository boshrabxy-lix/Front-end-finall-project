import { useQuery } from '@tanstack/react-query';
import React from 'react';
import authAxiosInstance from './../api/authAxiosInstance';

export default function useProdDetails(id) {
    const getProduct = async () => {
        const response = await authAxiosInstance.get(`/Products/${id}`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['product', 'en', id],
        queryFn: getProduct,
        staleTime: 1000 * 60 * 5,
    })
    return query;
}