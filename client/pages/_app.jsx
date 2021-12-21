//import { useRouter } from 'next/router'
import { getChampionBackground, getChampionProperties } from "../themes/Champions";
import '../styles/globals.css'
import cookie from "js-cookie";

// function test(){
//   document.getElementById("background").style.backgroundImage = 'url("https://cdn.discordapp.com/attachments/907757551439994910/922228367292510258/416153AF-B3AD-4998-A1A1-09D7BD0D6A84.jpg")';
//   console.log("hi");
// }

// https://pbs.twimg.com/media/FA83QC5XsAQXueE.jpg

function MyApp({ Component, pageProps }) {
  //const router = useRouter();
  
  //console.log(getChampionBackground())
  let theme = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg";
  console.log(theme);

  return (
      <div id="background" className={"fadeIn h-screen saturate-50 contrast-150 bg-center bg-no-repeat bg-cover bg-[url('"+getChampionBackground()+"')]"}>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
