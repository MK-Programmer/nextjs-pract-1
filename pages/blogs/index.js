import React from 'react';
import Navbar from '../../components/Navbar'
import Link from 'next/link';


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { props: { data } };
};

const firstBlog = ({data}) => {
  return (
    <>
      <Navbar />
      <div>
        <ul>
          {data.map((item) => {
            return <li key={item.id}>
              <Link href={`/blogs/${item.id}`}><h1>{item.title}</h1></Link>
              <p>{item.body}</p>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default firstBlog