//import ChampionTheme from "../themes/Champions"
import SearchBar from "../components/SearchBar";
import WelcomeScreen from "../components/WelcomeScreen";

export default function Home() {

    //ChampionTheme();

    return (
        <>
            <div className="flex h-screen">
                <div className="m-auto">
                        <SearchBar />
                </div>
            </div>
            <WelcomeScreen />
        </>
    )
}