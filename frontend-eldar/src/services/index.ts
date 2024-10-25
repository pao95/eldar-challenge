import posts from "./posts";

interface Services {
  posts: typeof posts;
}

const services: Services = {
  posts,
};

const api = services;

export default api;
