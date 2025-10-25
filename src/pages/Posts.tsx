import usePosts from "../actionHooks/usePosts";
import Loader from "../components/Loader";
import Card from "../components/posts/Card";
import Error from "../components/posts/Error";

export default function Posts() {
  const { data: posts, isLoading, error } = usePosts();
  if (isLoading) return <Loader />;
  if (error) {
    return (
      <Error>{error instanceof Error ? error.message : "خطای نامشخص"}</Error>
    );
  }
  return (
    <>
      <Card data={posts} />
    </>
  );
}
