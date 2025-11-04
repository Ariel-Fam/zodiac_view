import Image from "next/image";

function Footer() {
    return ( 

            <div className="flex flex-col items-center justify-center mt-40 bg-[#303E53] w-screen h-100">

                <Image src={"/card.png"} width={400} height={600} alt="img" />

            </div>

     );
}

export default Footer;