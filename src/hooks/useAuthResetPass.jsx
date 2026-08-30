import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';
import i18n from '../i18next';

export default function useAuthResetPass(options = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (passwordData) =>
      authAxiosInstance.patch('/Profile/change-password', passwordData),

    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['profile', i18n.language] });
      options.onSuccess?.(response);
    },

    onError: (error) => {
      options.onError?.(error);
    },
  });
}