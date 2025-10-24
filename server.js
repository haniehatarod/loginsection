import jsonserver from "json-server";
import bodyParser from "body-parser";
import fs from "node:fs";
import jwt from "jsonwebtoken";
const server = jsonserver.create();
const router = jsonserver.router("db.json");
const db = JSON.parse(fs.readFileSync("./db.json", "UTF-8"));
const middleware = jsonserver.defaults();
server.use(middleware);
server.use(bodyParser.json());
const expiresIn = "5m";
const SECRET_KEY = process.env.SECRET_KEY || "mysecretkey";
const PORT = process.env.PORT || 3000;

const createJwt = (payload) => {
  return jwt.sign(payload,SECRET_KEY, { expiresIn });
};
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    res.json({
      status: 400,
      message: "No Token",
    });
  }
  try {
    const decode = jwt.verify(token, SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).json({ message: "invalid token" });
  }
};
server.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: "رمز عبور یا نام کاربری نمیتواند خالی باشد",
    });
  }

  const user = db.users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(400).json({ message: "نام کاربری یا رمز عبور اشتباه است" });
  }

  const token = createJwt({ id: user.id, username: user.username, role: user.role });
  res.json({ token });
});

server.use(router);
server.listen(PORT, () => {
  console.log("server is run");
});
