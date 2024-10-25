import { Drawer } from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { EditPostForm } from "./EditPostForm";
import { Post } from "../../../interfaces/post";
import { PostContext } from "../context/PostContext";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../redux/notification/notificacionSlice";

export const EditPostContainer = () => {
  const dispatch = useDispatch();

  const { showEditPost, postSelected, handleConfirmEdit, setShowEditPost } =
    useContext(PostContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Post>({
    defaultValues: {
      title: "",
      body: "",
    },
    mode: "onSubmit",
  });

  const onEditSubmit = (post: Post) => {
    handleConfirmEdit(post);
  };

  const onInvalidSubmit = () => {
    dispatch(
      showNotification({
        severity: "error",
        message: "You must complete the required fields.",
      })
    );
  };
  useEffect(() => {
    reset({
      ...postSelected,
    });
  }, [postSelected]);

  return (
    <Drawer
      anchor={"bottom"}
      open={showEditPost}
      onClose={() => setShowEditPost(false)}
    >
      <EditPostForm
        control={control}
        handleSubmit={handleSubmit}
        onEditSubmit={onEditSubmit}
        errors={errors}
        onInvalidSubmit={onInvalidSubmit}
        setShowEditPost={setShowEditPost}
      />
    </Drawer>
  );
};
