import React from 'react';
import Navbar from '../../components/Navbar'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

const index = ({data}) => {
  return (
    <>
      <Navbar />
      {data.map((user) => {
        return <div key={user.id}>
          <Link href={`/users/${user.id}`}><h1>{user.name}</h1></Link>
          <p>{user.email}</p>
        </div>
      })}
    </>
  )
}

export default index