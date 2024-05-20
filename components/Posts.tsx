import React from 'react'
import IPost from '@/models/models'
import Link from 'next/link'

type Props={
    posts: IPost[]
}

const Posts = ({posts}: Props) => {
  return  (<ul>
              {posts.map((post: IPost)=>(
                <li key={post.id}>
                  <Link href={`blog/${post.id}`}>{post.title}</Link>
                </li>
                )
              )}
        </ul>)
}

export default Posts