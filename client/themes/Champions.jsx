import cookie from "js-cookie";
import * as Vibrant from 'node-vibrant'

// https://jariz.github.io/vibrant.js/

let currentTheme = cookie.get("theme") ? cookie.get("theme") : "Gwen"

export function getChampionBackground(){
    // https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{Champion}_0.jpg

    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentTheme}_0.jpg`
}

export function getChampionProperties(){
    let themeOption = {};
    
    var vibrant = new Vibrant("https://pbs.twimg.com/media/FA83QC5XsAQXueE.jpg")

    vibrant.getPalette((err, palette) => {
        
        themeOption.Champion = currentTheme;
        themeOption.Colors = palette;

    });

    return themeOption;
}

