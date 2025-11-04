import Image from "next/image";
import Link from "next/link";

function SignSelect() {
    return (
        <div className="flex flex-col items-center ">
            
            <h1 className="mt-20 mb-10 text-4xl text-center">Select A Zodiac Sign</h1>

            <div className="grid grid-cols-4 grid-rows-3 gap-4 bg-[#C3AC8D] rounded-4xl p-4 shadow-2xl">


                <Link href={"/zodiac/6"}>

                    <Image className="hover:scale-125" src={"/virgo.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/11"}>

                    <Image className="hover:scale-125" src={"/aquarius.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/8"}>

                    <Image className="hover:scale-125" src={"/scorpio.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/2"}>

                    <Image className="hover:scale-125" src={"/taurus.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/5"}>

                    <Image className="hover:scale-125" src={"/leo.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/7"}>

                    <Image className="hover:scale-125" src={"/libra.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/9"}>

                    <Image className="hover:scale-125" src={"/sagittarius.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/3"}>

                    <Image className="hover:scale-125" src={"/gemini.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/12"}>

                    <Image className="hover:scale-125" src={"/pisces.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/10"}>

                    <Image className="hover:scale-125" src={"/capricorn.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/4"}>

                    <Image className="hover:scale-125" src={"/cancer.png"} width={100} height={100} alt="img" />
                
                
                </Link>

                <Link href={"/zodiac/1"}>

                    <Image className="hover:scale-125" src={"/aries.png"} width={100} height={100} alt="img" />
                
                
                </Link>




            </div>



        </div>
      );
}

export default SignSelect;