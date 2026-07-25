import React from 'react'
import useResetPass from '../../hooks/useResetPass'

export default function ResetPass() {
  const {data,isError,isLoading,error}= useResetPass();
  console.log(data);
  return (
    <div>ResetPass</div>
  )
}
