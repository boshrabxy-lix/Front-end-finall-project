import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useAddReview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ productId, userName, rating, comment }) => authAxiosInstance.post(`/products/${productId}/reviews`,{
        userName,  rating, comment,
        }),
        onSuccess: (data, variables) => {
        queryClient.invalidateQueries(
            { queryKey: ['review', variables.productId]}
        )
    }
    })
}