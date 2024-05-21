'use client'
import React, { useEffect } from 'react'
import IPost from '@/models/models'
import Link from 'next/link'
import useSWR from 'swr'
import { getAllPosts } from '@/services/getAllPosts'

// type Props={
//     posts: IPost[]
// }

const Posts = () => {
  const {data: posts, isLoading}=useSWR('posts', getAllPosts);

  return isLoading ? (<h3>Loading posts...</h3>) : 
    (<ul>
      {posts.map((post: IPost)=>(
        <li key={post.id}>
          <Link href={`blog/${post.id}`}>{post.title}</Link>
        </li>
        )
      )}
    </ul>)
}

export default Posts