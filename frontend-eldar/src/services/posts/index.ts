import { Post } from "../../interfaces/post";

interface ApiRequest {
  method: "GET" | "POST" | "PUT" | "DELETE"; // Métodos HTTP permitidos
  url: string;
  body?: Post; // El cuerpo es opcional para las solicitudes GET
}

const getAllPosts = (): ApiRequest => {
  return {
    method: "GET",
    url: "posts",
  };
};

const editPost = (post: Post): ApiRequest => {
  return {
    method: "PUT",
    url: `posts/${post.id}`,
    body: post,
  };
};

const createPost = (post: Post): ApiRequest => {
  return {
    method: "POST",
    url: "posts",
    body: post,
  };
};

const posts = {
  getAllPosts,
  editPost,
  createPost,
};

export default posts;
