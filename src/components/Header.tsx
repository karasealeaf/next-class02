import Link from "next/link";

export default function Home() {
  return (
    <div className="text-tahiti text-center m-8 flex flex-row items-center items-stretch space-x-20">
      <h1>Kara's Website</h1>
      <br />
      <Link href="/about">About me!🌺</Link>
      <br />
      <Link href="/">Home sweet Home🌸</Link>
      <br />
      <Link href="/about/Gallery">Gallery🌷</Link>
      <br />
    </div>
  );
}
