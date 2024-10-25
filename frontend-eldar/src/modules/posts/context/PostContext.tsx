// PostContext.tsx
import { createContext, Context } from "react";
import { Post } from "../../../interfaces/post"; // Ajusta la ruta según tu estructura

interface PostContextType {
  posts: Post[];
  showEditPost: boolean;
  postSelected?: Post;
  showCreatePost: boolean;
  getAllPosts: () => void;
  setShowEditPost: (show: boolean) => void;
  setPostSelected: (post?: Post) => void;
  onClickEditPost: (post: Post) => void;
  handleConfirmEdit: (post: Post) => void;
  setShowCreatePost: (show: boolean) => void;
  handleConfirmCreate: (post: Post) => void;
}

// Proporciona un valor por defecto para evitar problemas con "undefined"
const defaultContextValue: PostContextType = {
  posts: [],
  showEditPost: false,
  showCreatePost: false,
  getAllPosts: () => {},
  setShowEditPost: () => {},
  setPostSelected: () => {},
  onClickEditPost: () => {},
  handleConfirmEdit: () => {},
  setShowCreatePost: () => {},
  handleConfirmCreate: () => {},
};

export const PostContext: Context<PostContextType> =
  createContext<PostContextType>(defaultContextValue);
