import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from './../api/authAxiosInstance'

export default function useChckout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({paymentMethod}) => {
      console.log("mutation function");
      console.log(paymentMethod);
      return await authAxiosInstance.post('/Checkouts', { paymentMethod })
    }, 
    onSuccess: (response) => {
      console.log(response);
      if (response.data.url) {
        location.href = response.data.url;
      }
      queryClient.invalidateQueries(
        { queryKey: ['carts'] }
      )
    }
  })
}