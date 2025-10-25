import { useQuery } from "@tanstack/react-query";
import PostActions from "../actions/PostActions";

export default function usePosts() {
  const { data, isLoading ,error} = useQuery({
    queryKey: ["posts"],
    queryFn: PostActions,
  });
  return {
    data,
    isLoading,
    error
  };
}
