export const LoginFn = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "خطا در ورود");
  }
  localStorage.removeItem("token");
  localStorage.setItem("token", data.token);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return data;
};
export const Logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
