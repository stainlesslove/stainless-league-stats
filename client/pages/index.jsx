import HomeSearchBar from "../components/HomeSearchBar";
import ThemeChangerButton from "../components/ThemeChangerButton";
import ThemeChangerMenu from "../components/ThemeChangerMenu";
import TextColor from "../components/TextColor";
import Loader from "../components/Loader";
import { getChampionColors } from "../themes/Champions";


export default function Root() {

  console.log(getChampionColors());

  return (
      <div className="flex h-screen">
        <div className="m-auto">
            <HomeSearchBar />
        </div>

        <ThemeChangerMenu />

        <div className="bottom-4 right-4 absolute animate-bounce hover:animate-none hidden md:block">
            <ThemeChangerButton />
        </div>

        <TextColor />
        {/* <Loader /> */}


      </div>
  )
}
