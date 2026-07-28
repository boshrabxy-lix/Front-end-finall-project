import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useAddReview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (productId) => authAxiosInstance.post(`/products/${id}/reviews`),
        onSuccess: () => {
            queryClient.invalidateQueries(
<<<<<<< HEAD
                { queryKey: ['review'], userName, Rating, Comment }
=======
                { queryKey: ['review'] }
>>>>>>> e5120abd6af2959c29c274aab1e26cc5d1aaa660
            )
        }
    })
}