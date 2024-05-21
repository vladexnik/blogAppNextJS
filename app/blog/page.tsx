'use client';
import styles from '../page.module.css';
import Posts from '@/components/Posts';
import PostSearch from '@/components/PostSearch';

const BlogPage =  () => {

  return (
    <>
      <h1 className={styles.main}>Blog Page</h1>
      <PostSearch />
      <Posts />
    </>
  )
}

export default BlogPage