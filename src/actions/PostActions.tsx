export default async function PostActions() {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("ابتدا وارد شود");
  }
  const res = await fetch("http://localhost:3000/api/posts", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("خطا در بارگزاری پست ها");
  }
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return data;
}
