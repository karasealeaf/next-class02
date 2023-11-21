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
      <h1 className="text-center m-5">Welcome!</h1>
        <p className="text-center m-5">Hellooooo, this is my website all about me.</p>
        <h2 className="text-center m-5">My fave things...</h2>
        <p className="text-center m-5">An exciting table of things I like, whoop!</p>
        <table className="hover:table-fixed text-center m-5 justify-between">
  <thead>
    <tr>
      <th>Stuff</th>
      <th>Films</th>
      <th>Hobbies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Most music</td>
      <td>Shaun of the dead</td>
      <td>Computering things</td>
    </tr>
    <tr>
      <td>All things pink</td>
      <td>Legally Blonde</td>
      <td>Watching films</td>
    </tr>
    <tr>
      <td>Animals</td>
      <td>Insideous</td>
      <td>Crafty bits</td>
    </tr>
    <tr>
      <td>Zen</td>
      <td>Barbie</td>
      <td>Coffee</td>
    </tr>
  </tbody>
</table>
      </div>
    </main>
  );
}
