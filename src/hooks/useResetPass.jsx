import { useQuery } from '@tanstack/react-query'
import React from 'react'
import i18n from '../i18next'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useResetPass() {
    return useQuery({
        queryKey: [ResetPass, i18n.language],
        queryFn: async () => {
            const response = await authAxiosInstance.gat('Profile/change-password');
            return response.data;
        },
        staleTime: 1000 * 60 * 5
    })
}
