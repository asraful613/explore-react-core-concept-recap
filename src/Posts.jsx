import { useEffect, useState } from "react"
import Post from "./post"

export default function Posts(){
    const [posts,setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then (res =>res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div className="">
            <h3>Post : {posts.length}</h3>
           {
            Posts.map(post => <Post post={post}></Post>)
           }
        </div>
    )
}


