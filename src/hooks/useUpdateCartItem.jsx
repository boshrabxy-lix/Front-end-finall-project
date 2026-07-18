import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from './../api/authAxiosInstance';

export default function useUpdateCartItem() {
    const queryClient= useQueryClient();

  return useMutation({
    mutationFn:async ({productId,count})=>{
        await authAxiosInstance.patch(`/carts/${productId}`,{count})
    },onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['carts']})
    }
  })
}
