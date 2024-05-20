
import { Metadata } from "next"

async function getData(id: string) {
  const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    next:{
      revalidate: 60
    }
  })
  return response.json();
}

type Props={
    params:{
        id: string
    }
}

export async function generateMetadata({params : {id}}: Props): Promise<Metadata> {
  const post=await getData(id);
  return {
    title: post.title
  }  
}

const Post = async ({ params: {id}}: Props ) => {
  const post =await getData(id);
  console.log(post);
  return (
    <>
      <div>{post.title}</div>
      <p>{post.body}</p>
    </>

  )
}

export default Post