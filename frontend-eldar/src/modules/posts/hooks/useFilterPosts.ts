import { useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useFilterData from "../../../hooks/useFilterData";
import { Post } from "../../../interfaces/post";

export const useFilterPosts = (posts: Post[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const filteredPosts = useFilterData<Post>(posts, debouncedSearchTerm);

  const handleSearch = (termValue: string) => {
    setSearchTerm(termValue);
  };

  return { handleSearch, filteredPosts };
};
