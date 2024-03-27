import Image from "next/image";
import Header from "./components/common/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="w-full h-full relative">
          <Image
            className=" w-screen h-full  object-cover"
            src="/main-banner.jpeg"
            alt=""
            width="1000"
            height="1000"
          ></Image>
          <div className="absolute bottom-0 left-0 right-0 w-full h-[200px]">
            <h1 className="text-5xl font-bold">
              Nueva coleccion de american styles Collection
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
