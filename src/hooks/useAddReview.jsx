import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import Swal from 'sweetalert2';

export default function useAddReview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ productId, userName, rating, comment }) => authAxiosInstance.post(`/products/${productId}/reviews`, {
            userName, rating, comment,
        }),
        onSuccess: (data, variables) => {
            Swal.fire({
                icon: 'success',
                title: 'Comment added successfully',
                text: 'Comment added successfully',
                confirmButtonText: 'Okay'
            })
            queryClient.invalidateQueries(
                { queryKey: ['review', variables.productId] }
            )
        }
    })
} 