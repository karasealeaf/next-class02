import Link from "next/link";
import Image from "next/image";

type faveParam = { params: { faves: string } };

export function generateMetadata({ params }: faveParam) {
  const modTitle = params.faves[0].toUpperCase() + params.faves.slice(1);
  return {
    title: `Kara's Favourite Things - ${modTitle}`,
    description: `Karas Favourite stuff - fun facts about ${params.faves}`,
  };
}

export default function Page({ params }: faveParam) {
  return (
    <main>
      <div>
        <h2>This is my dynamic route paramater: {params.faves} </h2>
        <Link href='/about'>Back it up</Link>
        <p>WHY WON'T YOU WORK!!!!</p>
        <Image src='/Profile.png' width={418} height={580} alt='This is an image of me!'/>
      </div>
    </main>
  );
}
