import { Button, Grid2 as Grid, Typography } from "@mui/material";
import { TextFieldInput } from "../../../components/inputs/TextFieldInput";
import {
  Control,
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { Post } from "../../../interfaces/post";

interface EditPostFormProps {
  control: Control<Post>;
  handleSubmit: (
    onEditSubmit: SubmitHandler<Post>,
    onInvalidSubmit: SubmitErrorHandler<Post>
  ) => (event?: React.BaseSyntheticEvent) => Promise<void>;
  onEditSubmit: SubmitHandler<Post>;
  errors: FieldErrors<Post>;
  onInvalidSubmit: () => void;
  setShowEditPost: (show: boolean) => void;
}
export const EditPostForm: React.FC<EditPostFormProps> = ({
  control,
  errors,
  handleSubmit,
  onEditSubmit,
  onInvalidSubmit,
  setShowEditPost,
}) => {
  return (
    <form onSubmit={handleSubmit(onEditSubmit, onInvalidSubmit)}>
      <Grid container spacing={3} p={{ xs: 2, sm: 4, md: 5 }}>
        <Grid size={12}>
          <Typography textAlign={"center"} variant="h5">
            Edit post
          </Typography>
        </Grid>
        <Grid size={12} sx={{}}>
          <TextFieldInput
            control={control}
            label="Title (*)"
            fullWidth
            size="small"
            error={errors.title}
            name="title"
            rules={{
              required: {
                value: true,
                message: "The title is required.",
              },
            }}
          />
        </Grid>
        <Grid size={12} sx={{}}>
          <TextFieldInput
            control={control}
            label="Body post (*)"
            fullWidth
            multiline
            rows={10}
            error={errors.body}
            name="body"
            rules={{
              required: {
                value: true,
                message: "The body is required.",
              },
            }}
          />
        </Grid>

        <Grid
          size={12}
          display={"flex"}
          justifyContent={"right"}
          alignContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Button
            variant="text"
            size="small"
            onClick={() => setShowEditPost(false)}
          >
            Cancel
          </Button>
          <Button variant="contained" size="small" type="submit">
            Confirm
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
