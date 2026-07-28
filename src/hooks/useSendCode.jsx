import React from 'react'
import i18n from '../i18next'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axoisInstance from '../api/axiosInstance';

export default function useSendCode() {
  const queryClient= useQueryClient();

  return useMutation({
    mutationFn: async ({email}) => {
      return await axoisInstance.post('/auth/SendCode', {
        email:email,
      });
    },onSuccess:()=>{
      queryClient.invalidateQueries(
        {queryKey:['sendCode']}
      )
    }
  });
}