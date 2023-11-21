import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me Blog",
  description: "A list of stuff on my about me route.",
};

type favesSearchQuery = {
  sortBy: string;
};

type favesType = {
  name: string;
  id: number;
  description: string;
};

let faves: favesType[] = [
  {
    name: "Most music",
    id: 0,
    description: "Favourite Things",
  },
  {
    name: "All things pink",
    id: 1,
    description: "Favourite Things",
  },
  {
    name: "Animals",
    id: 2,
    description: "Favourite Things",
  },
  {
    name: "A bit of Zen",
    id: 3,
    description: "Favourite Things",
  },
  {
    name: "Shaun of the dead",
    id: 4,
    description: "Films",
  },
  {
    name: "Legally Blonde",
    id: 5,
    description: "Films",
  },
  {
    name: "insideous",
    id: 6,
    description: "Films",
  },
  {
    name: "Barbie",
    id: 7,
    description: "Films",
  },
  {
    name: "Computering things",
    id: 8,
    description: "Hobbies",
  },
  {
    name: "Watching film",
    id: 9,
    description: "Hobbies",
  },
  {
    name: "Craftyness",
    id: 10,
    description: "Hobbies",
  },
  {
    name: "Coffee",
    id: 11,
    description: "Hobbies",
  },
];

function compareFaves(a: favesType, b: favesType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: favesSearchQuery;
}) {
  let sortedFave = [...faves];

  if (searchParams.sortBy == "asc") {
    sortedFave.sort(compareFaves);
  } else if (searchParams.sortBy == "desc") {
    sortedFave.sort(compareFaves).reverse();
  }
  return (
    <div>
      <h2 className="text-center border-opacity-1 rounded-sm border-2 border-pink-400 ">
        This is the about page, that is really just a list of some things about
        me...you can put them into ascending of descending order at your own
        leisure! I know :smug: You are very welcome !
      </h2>
<div className="text-center animate-bounce ">
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/about">Remove the sort</Link>
      <br />
      <Link href="/about?sortBy=asc">Sort by ascending</Link>
      <br />
      <Link href="/about?sortBy=desc">Sort by descending</Link>
      <br />
      </div>
      <p className="text-center hover:animate-spin">
        <Link href="/">Go home! </Link>
      </p>
      <h2 className="text-center m-5">My fave things...</h2>
      <p className="text-center m-5">
        An exciting list of things I like, whoop whoop!
      </p>

      {sortedFave.map((fave) => {
        return (
          <div key={fave.id} className="text-center animate-pulse bg-pink-400">
            <Link
              className="text-center m-5"
              href={`/about/${fave.name.toLowerCase()}`}
            >
              {fave.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
