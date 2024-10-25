import { useContext, useEffect } from "react";
import { PostsGrid } from "./PostsGrid";
import { PostContext } from "../context/PostContext";
import { Grid2 as Grid } from "@mui/material";
import { SearchPost } from "./SearchPost";
import { useFilterPosts } from "../hooks/useFilterPosts";
import { useCheckRole } from "../../../hooks/useCheckRole";
import { userRoleTypes } from "../../../enums/userRoleTypes";
import { CreatePostContainer } from "../create/CreatePostContainer";

export const PostsContainer = () => {
  const { posts, getAllPosts, onClickEditPost } = useContext(PostContext);
  const { checkRole } = useCheckRole();

  const { filteredPosts, handleSearch } = useFilterPosts(posts);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Grid container rowSpacing={2}>
      <Grid size={{ xs: 10.5, sm: 6 }}>
        <SearchPost handleSearch={handleSearch} />
      </Grid>

      <Grid
        size={{ xs: 1.5, sm: 6 }}
        display={"flex"}
        justifyContent={"right"}
        alignContent={"end"}
      >
        {checkRole({ role: userRoleTypes.ADMIN }) && <CreatePostContainer />}
      </Grid>

      <Grid size={12}>
        <PostsGrid
          dataPosts={filteredPosts}
          onClickEditPost={onClickEditPost}
        />
      </Grid>
    </Grid>
  );
};
