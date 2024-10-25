import { useState, ReactNode, useCallback } from "react";
import api from "../../../services";
import useFetch from "../../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../redux/notification/notificacionSlice";
import { Post } from "../../../interfaces/post";
import { PostContext } from "./PostContext";

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const { callEndpoint } = useFetch();

  const dispatch = useDispatch();

  const [posts, setPosts] = useState<Post[]>([]);
  const [postSelected, setPostSelected] = useState<Post>();
  const [showEditPost, setShowEditPost] = useState<boolean>(false);
  const [showCreatePost, setShowCreatePost] = useState<boolean>(false);

  const getAllPosts = useCallback(() => {
    callEndpoint(api.posts.getAllPosts(), ({ status, data }) => {
      if (status) {
        setPosts(data);
      } else {
        dispatch(
          showNotification({
            severity: "error",
            message: "Error retrieving the posts.",
          })
        );
      }
    });
  }, []);

  const handleConfirmEdit = useCallback((post: Post) => {
    callEndpoint(api.posts.editPost(post), ({ status }) => {
      if (status) {
        dispatch(
          showNotification({
            severity: "success",
            message: "Post edited successfully!",
          })
        );
        setShowEditPost(false);
      } else {
        dispatch(
          showNotification({
            severity: "error",
            message: "Error editing  the post.",
          })
        );
      }
    });
  }, []);

  const handleConfirmCreate = useCallback((post: Post) => {
    callEndpoint(api.posts.createPost(post), ({ status }) => {
      if (status) {
        dispatch(
          showNotification({
            severity: "success",
            message: "Post created successfully!",
          })
        );
        setShowCreatePost(false);
      } else {
        dispatch(
          showNotification({
            severity: "error",
            message: "Error creating  the post.",
          })
        );
      }
    });
  }, []);

  const onClickEditPost = (post: Post) => {
    setShowEditPost(true);
    setPostSelected(post);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        showEditPost,
        postSelected,
        showCreatePost,
        getAllPosts,
        setShowEditPost,
        setPostSelected,
        onClickEditPost,
        handleConfirmEdit,
        setShowCreatePost,
        handleConfirmCreate,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
