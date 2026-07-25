import { useQuery } from '@tanstack/react-query'
import React from 'react'
import i18n from '../i18next'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useChangeEmail() {
    return useQuery({
        queryKey: [changeEmail, i18n.language],
        queryFn: async () => {
            const response = await authAxiosInstance.gat('Profile/change-email');
            return response.data;
        },
        staleTime: 1000 * 60 * 5
    })
}
