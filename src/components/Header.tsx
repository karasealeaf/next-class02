import Link from "next/link";

export default function Home() {
  return (
    <div className="text-tahiti text-center m-5 flex flex-row items-center items-stretch space-x-20">
      <br />
      <Link href="/about/page">About me!🌺</Link>
      <br />
      <Link href="/">Home sweet Home🌸</Link>
      <br />
      <Link href="/about/Gallery/page">Gallery🌷</Link>
      <br />
    </div>
  );
}