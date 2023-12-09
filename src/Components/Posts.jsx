import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store/reducers/posts";

function Posts() {
  // Desestruturando os valores do estado do reducer
  const { data, loading, error } = useSelector((state) => state.posts);

  // Inicializando o hook para disparar as ações
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Disparando a asyncAction que puxará os dados da API
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Houve um erro ao puxar os dados</div>;
  return (
    <>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h3>{post.email}</h3>
            <p>{post.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
