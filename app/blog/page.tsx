'use client';
import styles from '../page.module.css';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import Posts from '@/components/Posts';
import { getAllPosts } from '@/services/getAllPosts';
import PostSearch from '@/components/PostSearch';


const BlogPage =  () => {
  const [posts, setPosts]=useState<any[]>([])
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
    getAllPosts()
      .then(setPosts)
      .finally(()=> setLoading(false))
  },[])
  
  return (
    <>
      <h1 className={styles.main}>Blog Page</h1>
      <PostSearch onSearch={setPosts}/>
      {loading ? <h3>Loading...</h3> :
         <Posts posts={posts}/>
      }
    </>
  )
}

export default BlogPage