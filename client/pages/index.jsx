import HomeSearchBar from "../components/HomeSearchBar";
import ThemeChangerButton from "../components/ThemeChangerButton";
import Background from "../components/Background";

export default function Root() {

  return (
    <Background>
      <div className="flex h-screen">
        <div className="m-auto">
            <HomeSearchBar />
        </div>
        <div className="bottom-4 right-4 absolute animate-bounce hover:animate-none hidden md:block">
            <ThemeChangerButton />
        </div>
      </div>
  </Background>
  )
}
