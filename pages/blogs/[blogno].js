import React from 'react';
import { useRouter } from 'next/router'

const blog = () => {
  const router = useRouter();
  const blogId = router.query.blogno;
  return (
    <h1>hey this is { blogId }</h1>
  )
}

export default blog