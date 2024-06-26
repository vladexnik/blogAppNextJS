'use client'

import { FormEventHandler, useState } from "react"
import IPost from "@/models/models"
import { getPostsBySearch } from "@/services/getAllPosts";

type Props={
    onSearch: (value: IPost[]) => void;
}


const PostSearch = ({onSearch}: Props) => {

    const [search, setSearch]=useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) =>{
        event.preventDefault();
        const posts=await getPostsBySearch(search);
        onSearch(posts);
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="search" value={search} onChange={e => setSearch(e.target.value)}  />
        <button type="submit">Search</button>

    </form>
  )
}

export default PostSearch