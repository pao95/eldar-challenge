import { Grid2 as Grid } from "@mui/material";
import { PostsContainer } from "./list/PostsContainer";
import { EditPostContainer } from "./edit/EditPostContainer";

export const PostsPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <PostsContainer />
      </Grid>
      <Grid size={12}>
        <EditPostContainer />
      </Grid>
    </Grid>
  );
};
