import { useRouter } from 'next/router'
import ChampionTheme from "../themes/Champions";
import '../styles/globals.css'

function test(){
  document.getElementById("background").style.backgroundImage = 'url("https://cdn.discordapp.com/attachments/907757551439994910/922228367292510258/416153AF-B3AD-4998-A1A1-09D7BD0D6A84.jpg")';
  console.log("hi");
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  ChampionTheme()

  return (
    <div id="background" className="h-screen saturate-50 contrast-150 bg-center bg-no-repeat bg-cover bg-[url('https://pbs.twimg.com/media/FA83QC5XsAQXueE.jpg')]">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
