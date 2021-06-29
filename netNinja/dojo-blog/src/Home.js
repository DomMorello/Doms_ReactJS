import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new website",
      body: "lorem ipsum ...",
      author: "donglee",
      id: 1
    },
    {
      title: "welcome party!",
      body: "lorem ipsum ...",
      author: "morello",
      id: 2
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum ...",
      author: "morello",
      id: 3
    }
  ]);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useeffect run!");
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
