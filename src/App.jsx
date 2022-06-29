import React from "react"
import { Header } from "./components/Header"
import { Post } from "./Post"
import "./styles.css"

export function App() {

  return (
    <div>
      <Header/>
      <Post
        author="Felipe Neves Ricardo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio totam, temporibus debitis ratione quod cum. Tempore est, illum repudiandae velit pariatur vitae aperiam, atque porro sunt dolorum deleniti quisquam."
      />
      <Post
        author="Filipe Roberto Beck"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum distinctio totam, temporibus debitis ratione quod cum. Tempore est, illum repudiandae velit pariatur vitae aperiam, atque porro sunt dolorum deleniti quisquam."
      />
    </div>
  )
}
