import loginImage from "./../../assets/login_img.png";
export default function Imagesection() {
  return (
    <section className="flex justify-center items-center">
      <div className="w-96 h-96">
        <img src={loginImage} alt="securelogin" className=" object-contain w-full h-full" />
      </div>
    </section>
  );
}
