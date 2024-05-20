import React from 'react'
import styles from '../page.module.css';
import { Metadata } from 'next';
import Link from 'next/link';
import IPost from '@/models/models';

async function getData() {
  const response=await fetch('https://jsonplaceholder.typicode.com/posts',{
    next:{
      revalidate: 60
    }
  })
  if(!response.ok){
    throw new Error('Unable to load posts now. Please try later')
  }
  return response.json();
}

export const metadata: Metadata = {
  title: "Blog",
  description: 'about how we are cool'
};

const BlogPage = async () => {
  const posts=await getData();

  return (
    <>
      <h1 className={styles.main}>BlogPage</h1>
      <ul>
        {posts.map((post: IPost)=>(
          <li key={post.id}>
            <Link href={`blog/${post.id}`}>{post.title}</Link>
          </li>
          )
        )}
      </ul>

    </>
  )
}

export default BlogPage