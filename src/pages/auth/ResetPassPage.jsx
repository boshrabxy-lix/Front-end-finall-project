import React from 'react'
import useResetPass from '../../hooks/useResetPass'

export default function ResetPassPage() {
  const { data, isError, isLoading, error } = useResetPass();
  console.log(data);
  return (

    <div>ResetPass</div>
  )
}
