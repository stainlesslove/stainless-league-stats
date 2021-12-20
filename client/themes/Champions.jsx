import cookie from "js-cookie";
import * as Vibrant from 'node-vibrant'

// https://jariz.github.io/vibrant.js/

export default function Championtheme(){
    
    let currentTheme = "Gwen";
    let themeOption = {};

    // const res = fetch(`https://ddragon.leagueoflegends.com/api/versions.json`);
    // const data = res.json();
    // console.log(data);

    if(cookie.get("theme")) currentTheme = cookie.get("theme");
    
    var vibrant = new Vibrant("https://pbs.twimg.com/media/FA83QC5XsAQXueE.jpg")

    vibrant.getPalette((err, palette) => {
        console.log(palette);
        themeOption = {
            "Champion": {
                "ID": currentTheme,
                //"Colors": pallete
            }
        }
    });

    return themeOption;

}
