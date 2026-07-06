import { useQuery } from '@tanstack/react-query';
import axoisInstance from "../../api/axiosInstance";

export default function useProducts() {
    const getProduct = async () => {
        const response = await axoisInstance.get(`/Products`, {
        });
        return response.data;
    }
    
    const query = useQuery({
        queryKey: ['product','en'],
        queryFn: getProduct,
        staleTime: 1000 * 60 * 5,
    })
    return query;
}