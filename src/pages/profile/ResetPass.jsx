import React from 'react'
import useResetPass from '../../hooks/useResetPass'

export default function ResetPass() {

const {data,isError,isLoading,error}=useResetPass();

  return (
    <div>ResetPass</div>
  )
}
