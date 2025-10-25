import usePosts from "../actionHooks/usePosts";
import Loader from "../components/Loader";
import Card from "../components/posts/Card";

export default function Posts() {
  const { data: posts, isLoading } = usePosts();
  if (isLoading) return <Loader />;
  return (
    <>
      <Card data={posts} />
    </>
  );
}
