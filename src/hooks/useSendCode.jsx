import React from 'react'
import i18n from '../i18next'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axoisInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

export default function useSendCode() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (email) => {
      console.log(email);
      return await axoisInstance.post('auth/Account/SendCode', { email });

    }, onSuccess: (data, variables) => {
      queryClient.invalidateQueries(
        navigate('auth/Account/resetpassword'),
        { queryKey: ['sendCode', variables.email] },
      )
    }
  });
}
