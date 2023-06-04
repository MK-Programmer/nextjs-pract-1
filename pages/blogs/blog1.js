import React from 'react'
import { useRouter } from 'next/router'

// export const getStaticPath = async () => 

export const getStaticProps = async () => {
  // const router = useRouter();
  // const blogId = router.query.blogno;
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
  const data = await res.json();
  return { props: { data } };
}

const myData = ({data}) => {
  return (
    <>
      {data.map((item) => {
        return <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
        </div>
      })}
    </>
  )
}

export default myData