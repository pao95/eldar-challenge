import { Button, Drawer, IconButton } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CreatePostForm } from "./CreatePostForm";
import { PostContext } from "../context/PostContext";
import { Post } from "../../../interfaces/post";
import { showNotification } from "../../../redux/notification/notificacionSlice";
import { useDispatch } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
export const CreatePostContainer = () => {
  const dispatch = useDispatch();

  const { showCreatePost, setShowCreatePost, handleConfirmCreate } =
    useContext(PostContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: {
      title: "",
      body: "",
    },
    mode: "onSubmit",
  });

  const onCreateSubmit = (post: Post) => {
    handleConfirmCreate(post);
  };

  const onInvalidSubmit = () => {
    dispatch(
      showNotification({
        severity: "error",
        message: "You must complete the required fields.",
      })
    );
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setShowCreatePost(true)}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        New post
      </Button>
      <IconButton
        color="secondary"
        onClick={() => setShowCreatePost(true)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <AddCircleIcon />
      </IconButton>

      <Drawer
        anchor={"bottom"}
        open={showCreatePost}
        onClose={() => setShowCreatePost(false)}
      >
        <CreatePostForm
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onEditSubmit={onCreateSubmit}
          onInvalidSubmit={onInvalidSubmit}
          setShowCreatePost={setShowCreatePost}
        />
      </Drawer>
    </>
  );
};
