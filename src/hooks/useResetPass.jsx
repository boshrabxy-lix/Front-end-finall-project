import { useQuery } from '@tanstack/react-query'
import React from 'react'
import i18n from '../i18next'
import axoisInstance from '../api/axiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query'


export default function useResetPass() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ values }) => {
      return await axoisInstance.patch('auth/Account/resetpassword', {
        code: values.code,
        email: values.email,
        newPassword: values.newPassword,
      });
    }, onSuccess: () => {
      queryClient.invalidateQueries(
        { queryKey: ['ResetPass', i18n.language, email, newPassword, code] }
      )
    }
  });
}

