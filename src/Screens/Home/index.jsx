import React, { useEffect, useState } from "react";
import * as ApiCall from "../../api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    ApiCall.getRequest("/products").then((response) => {
      console.log(response);
      if (response.status === 200) {
        setPosts(response.data.products);
      }
    });
  }, []);

  return (
    <div>
      {posts.map((item, idx) => {
        return <h1 key={idx}>{item?.title}</h1>;
      })}
    </div>
  );
};

export default Home;
