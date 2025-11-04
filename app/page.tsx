import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
   
        <div
      className="
        min-h-[100svh] w-full
        bg-[url('/backgroundHome.png')] bg-cover bg-center bg-no-repeat
        flex flex-col items-center 
        px-6 text-white
      "
    >
      {/* your centered column content */}
      <Image className="mt-20" src={"/softwareLogo.png"} width={180} height={80} alt="img" />

      <Image className="rounded-3xl mt-10" src={"/home2.png"} width={400} height={600} alt="img" />


      <Link href={"/signSelect"}>
      
        <Image className="mt-20 mb-27 hover:scale-110 cursor-pointer"  src={"/learnMore.png"} width={180} height={80} alt="img" />
      </Link>

      
    </div>

  );
}
