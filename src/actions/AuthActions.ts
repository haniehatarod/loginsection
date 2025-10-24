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
  console.log("Response from server:", data);
  if (!res.ok) {
    throw new Error(data.message || "خطا در ورود");
  }

  localStorage.setItem("token", data.token);
  return data;
};
