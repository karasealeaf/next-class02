import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-between text-tahiti">
      <div className="max-h-[80%] flex flex-col items-center">
        <h2 className="text-tahiti bg-pink-500 text-center m-5">Kara Sealeaf</h2>
        <div></div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQM5iDZY9ncdq_C_l-f8FJLDi2y_C6yWX-364aWt4Zror0cH6MNFfrcltaOOHfUE2eJg&usqp=CAU"
      width={250}
      height={250}
      alt="Picture of water flower" />
        <p className="text-center m-5">Hellooooo, this is some text!</p>
      </div>
    </main>
  );
}
