import Link from "next/link";

export default function Home() {
  return (
    <div className="text-tahiti text-center m-5 flex flex-row items-center">
      <ul>
        <li className="text-center">
          <Link href="/">Home sweet Home🌸</Link>
        </li>
        <li>
          <Link href="/about/page">About me!🌺</Link>
        </li>
        <li>
          <Link href="/about/Gallery/page">Gallery🌷</Link>
        </li>
      </ul>
    </div>
  );
}
