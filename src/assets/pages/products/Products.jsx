import React from 'react'
import useProducts from '../../hooks/useProducts'

export default function Products() {
    const {data,isLoading,error,isError}=useProducts();
  return (
    <div>
      
    </div>
  )
}
