import React from 'react'
import i18n from '../i18next'
import axoisInstance from '../api/axiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Swal from 'sweetalert2';


export default function useResetPass() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ code, email, newPassword }) => {
      return await axoisInstance.patch('auth/Account/resetpassword', {
        code, email, newPassword,
      });
    }, onSuccess: (data, variables) => {
      Swal.fire({
        icon: 'success',
        title: 'The Password Reset Successfully',
        text: 'Go To Login Page',
        confirmButtonText: 'Okay'
      })
      queryClient.invalidateQueries(
        { queryKey: ['ResetPass', i18n.language, variables.email, variables.newPassword, variables.code] }

      )
    }
  });
}