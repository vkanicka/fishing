import CreateNewGameComponent from "@/components/createNewGame";
import Link from "next/link";
import {AlertTriangle, Sun, CloudRain, Square, CheckSquare, RefreshCw, RefreshCcw}  from 'react-feather'

export default function Home() {

  const createNewGame = () => {

  }

  return (
    <main className="flex flex-col gap-4 my-16 mx-auto items-center">
      <h1 className="text-4xl mx-6">Last Minute Fishing</h1>
      <h3 className="mx-6">A helper for SV community center fish bundles</h3>
      <div className="max-w-[300px] border-2 border-white border-solid p-6 m-2 lg:m-6 flex flex-col items-center rounded-xl border-b-4 border-r-4 gap-3">
        <p>Generate your own url to track your community center fish bundle progress. </p> <p> Free to use for gamers and as overlays for streamers. </p>
        <p className="text-lg">Bookmark your link!</p>
        <CreateNewGameComponent />  

      </div>
      <div className="flex flex-col gap-2 border-2 border-white border-solid p-6 m-2 lg:m-6 items-center rounded-xl border-b-4 border-r-4">
        <h3>Preview Fish By Season</h3>
        <nav className="flex flex-col gap-4 items-center">
          <Link className="max-w-[300px] hover:cursor-pointer p-2 border-4 border-fuchsia-400 border-solid rounded-lg hover:underline hover:bg-gray-600 shadow-glow drop-shadow-glow min-w-[200px] text-center" href={'/fishes/Spring'}>Spring</Link>
          <Link className="max-w-[300px] hover:cursor-pointer p-2 border-4 border-fuchsia-400 border-solid rounded-lg hover:underline hover:bg-gray-600 shadow-glow drop-shadow-glow min-w-[200px] text-center" href={'/fishes/Summer'}>Summer</Link>
          <Link className="max-w-[300px] hover:cursor-pointer p-2 border-4 border-fuchsia-400 border-solid rounded-lg hover:underline hover:bg-gray-600 shadow-glow drop-shadow-glow min-w-[200px] text-center" href={'/fishes/Fall'}>Fall</Link>
          <Link className="max-w-[300px] hover:cursor-pointer p-2 border-4 border-fuchsia-400 border-solid rounded-lg hover:underline hover:bg-gray-600 shadow-glow drop-shadow-glow min-w-[200px] text-center" href={'/fishes/Winter'}>Winter</Link>
          
        </nav>
      </div>
        <div className="max-w-[300px] border-2 border-white border-solid p-6 m-2 lg:m-6 flex flex-col items-center rounded-xl border-b-4 border-r-4 gap-2 min-w-[300px]">
        <h4>Legend</h4>
        <div className="flex flex-col">
          <div className="flex justify-between p-2 gap-4">
            <AlertTriangle className="text-orange-300 w-16 h-16" />
            <p className="text-base text-right my-auto">Last chance this season</p>
          </div>
          <div className="flex justify-between p-2 gap-2">
            <Sun className="text-yellow-300 w-16 h-16" />
            <p className="text-base text-right my-auto">Sun only</p>
          </div>
          <div className="flex justify-between p-2 gap-2">
            <CloudRain className="text-cyan-300 w-16 h-16" />
            <p className="text-base text-right my-auto">Rain only</p>
          </div>
            
            
            
            {/* <AlertTriangle className="text-orange-300 w-24 h-24" />
            <p className="text-sm">Last season of year to fish. <br/> If winter, n/a in spring.</p>
            <AlertTriangle className="text-orange-300 w-24 h-24" />
            <p className="text-sm">Last season of year to fish. <br/> If winter, n/a in spring.</p> */}
          {/* <Sun />
          <CloudRain />
          <Square />
          <CheckSquare />
          <RefreshCw />
          <RefreshCcw /> */}
        </div>
        

      </div>
    </main>
  );
}