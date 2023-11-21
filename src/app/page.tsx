import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-between text-tahiti">
      <div className="max-h-[80%] flex flex-col items-center">
        <h2 className="text-tahiti bg-pink-500 text-center m-5">
          Welcome to my website...
        </h2>
        <img
          className="item-center m-5 hover:animate-spin h-250 w-250 mr-3 ... rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQM5iDZY9ncdq_C_l-f8FJLDi2y_C6yWX-364aWt4Zror0cH6MNFfrcltaOOHfUE2eJg&usqp=CAU"
          width={250}
          height={250}
          alt="Picture of a water colour flower"
        />

        <p className="text-center m-5">
          Hellooooo, this is my website all about me, feel free to click some
          links and have a nose.
        </p>
        <Link className="cursor-pointer" href="/about">
          Click here for the about me page
        </Link>
      </div>
    </main>
  );
}
