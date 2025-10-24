import Imagesection from "../components/login/Imagesection";
import LoginForm from "../components/login/LoginForm";

export default function Login() {
  return (
    <div className="grid grid-cols-2 bg-white/90">
      <Imagesection />
      <LoginForm />
    </div>
  );
}
