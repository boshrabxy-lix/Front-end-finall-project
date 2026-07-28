import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useAddReview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (productId) => authAxiosInstance.post(`/products/${id}/reviews`),
        onSuccess: () => {
            queryClient.invalidateQueries(
                { queryKey: ['review'], userName, Rating, Comment }
            )
        }
    })
}