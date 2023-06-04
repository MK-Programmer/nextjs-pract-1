import React from 'react'
import Navbar from '../../components/Navbar';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: {
        userno: user.id.toString(),
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  var id = context.params.userno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user
    }
  }
}

const userData = ({user}) => {
  return (
    <>
    <Navbar />
      <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
      </div>
    </>
  )
}

export default userData