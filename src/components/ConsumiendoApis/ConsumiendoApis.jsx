import { useEffect, useState } from "react";

const ConsumiendoApis = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const getData = fetch("https://jsonplaceholder.typicode.com/posts");

    getData
      .then((res) => res.json())
      .then((res) => setPost("then :", res))
      .catch((err) => console.log("catch :", err));
  }, []);

  console.log(posts);

  const [isCreated, setIsCreated] = useState(false);

  const crearPost = () => {
    const createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: "prueba del front",
        userId: 2,
        body: "probando verbo post",
      }),
    });

    createPost.then((res) => setIsCreated(true));
  };

  console.log(isCreated);
  return (
    <div>
      <button onClick={crearPost}>Crear post</button>
    </div>
  );
};

export default ConsumiendoApis;
