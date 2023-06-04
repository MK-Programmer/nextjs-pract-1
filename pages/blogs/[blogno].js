import React from 'react'
import Navbar from '../../components/Navbar'

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  const paths = data.map((currentEl) => {
    return {
      params: {
        blogno: currentEl.id.toString(),
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.blogno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return { props: { data } };
}

const myData = ({data}) => {
  return (
    <>
      <Navbar />
      <div key={data.id}>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </>
  )
}

export default myData