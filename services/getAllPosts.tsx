export async function getAllPosts() {
  const response=await fetch('/api/posts',{
    next:{
      revalidate: 200
    }
  })
  if(!response.ok){
    throw new Error('Unable to load posts now. Please try later')
  }
  return response.json();
}

export async function getPostsBySearch(search: string) {
  const response=await fetch(`/api/posts?q=${search}`,{
    next:{
      revalidate: 200
    }
  })
  if(!response.ok){
    throw new Error('Unable to load posts now. Please try later')
  }
  return response.json();
}