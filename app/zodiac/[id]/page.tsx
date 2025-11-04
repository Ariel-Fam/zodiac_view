// app/zodiac/[id]/page.tsx
import { notFound } from "next/navigation";
import { ZODIAC_SIGNS, type ZodiacSign } from "@/data/zodiac";

import Image from "next/image";

type Params = { id: string };

// Note: params is a Promise here
export default async function ZodiacPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;                 // ✅ unwrap the Promise
  const numericId = Number(id);

  if (!Number.isInteger(numericId)) return notFound();

  const sign = ZODIAC_SIGNS.find(s => s.id === numericId);
  if (!sign) return notFound();

  return (
    <main className="w-full flex flex-col items-center justify-center">

        <div className="w-screen bg-[#476489] h-40 flex flex-col justify-center items-center mb-24">

            <Image src={`/${sign.slug}.png`} height={140} width={140} alt="img" />

        </div>





        <article className="max-w-3xl w-full rounded-2xl border flex flex-col items-center p-6">
            
            <h1 className="text-2xl mt-10">General Information:</h1>
            <h2 className="text-sm text-black">
            {sign.dateRange} • Element: {sign.element} • Modality: {sign.modality}
            </h2>

            <section className="mt-6  items-center grid  gap-6 md:grid-rows-5">

            <div className="flex flex-col items-center mb-20 mt-10" >   

                <div className=" bg-orange-400 rounded-full p-4 mb-10">

                    <Image src={"/strengths.png"} width={100} height={100} alt="img" />
                </div>


                <Block title="Strengths" items={sign.strengths} />

            </div>
            

            <div className="flex flex-col items-center mb-20 mt-10">   

                <div className=" bg-orange-400 rounded-full p-4 mb-10">

                 <Image src={"/characterTraits.png"} width={100} height={100} alt="img" />
                </div>


                <Block title="Character Traits" items={sign.characterTraits} />

            </div>


            <div className="flex flex-col items-center mb-20 mt-10" >   

                <div className="  bg-purple-400 rounded-full p-4 mb-10">

                <Image src={"/personalityTraits.png"} width={100} height={100} alt="img" />
                </div>


                <Block title="Personality Traits" items={sign.personalityTraits} />

            </div>

            <div className="flex flex-col items-center mb-20 mt-10" >   

                <div className=" bg-purple-400 rounded-full p-4 mb-10">

                    <Image src={"/weaknesses.png"} width={100} height={100} alt="img" />
                </div>


                <Block title="Weaknesses" items={sign.weaknesses} />

            </div>

            <div className="flex flex-col items-center mb-20 mt-10" >   

                <div className=" bg-orange-400 rounded-full p-4 mb-10">

                    <Image src={"/growthTips.png"} width={100} height={100} alt="img" />
                </div>


                <Block title="Growth Tips" items={sign.growthTips} />

            </div>


            
            
            
            
            
            </section>
        </article>
    </main>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-green-500 p-24 rounded-3xl shadow-2xl">

      <h2 className="font-semibold mb-2">{title}</h2>
      <ul className="list-disc pl-5 space-y-1 text-sm text-white">
        {items.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}

// // Prebuild the 12 ids (SSG + ISR-friendly)
// export async function generateStaticParams() {
//   return ZODIAC_SIGNS.map(s => ({ id: String(s.id) }));
// }

// // Optional: revalidate if your dataset updates
// export const revalidate = 3600;
