import CreateNewGameComponent from "@/components/createNewGame";
import Link from "next/link";

export default function Home() {

  const createNewGame = () => {

  }

  return (
    <main className="bg-transparent flex flex-col gap-4 my-16 mx-auto items-center">
      <CreateNewGameComponent />
      <h3>Preview Fish By Season</h3>
      <nav className="flex flex-col gap-4 items-center">
        <Link href={'/fishes/spring'}>Spring</Link>
        <Link href={'/fishes/summer'}>Summer</Link>
        <Link href={'/fishes/fall'}>Fall</Link>
        <Link href={'/fishes/Winter'}>Winter</Link>
      </nav>
    </main>
  );
}