import { useQuery } from '@tanstack/react-query'
import React from 'react'
import i18n from '../i18next'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useProfil() {
    return useQuery({
        queryKey: ['Profile', i18n.language],
        queryFn: async () => {
            const response = await authAxiosInstance.get('profile');
            return response.data;
        },
        staleTime: 1000 * 60 * 5
    })
}
