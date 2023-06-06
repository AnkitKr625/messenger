import Image from "next/image";
import Login from "@/components/Login";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image height={48} width={48} src="./images/logo.svg" alt="logo" />
      <h2 className="font-bold text-3xl text-gray-500">Sign in to your account</h2>
      <Login/>
    </div>
  );
}
