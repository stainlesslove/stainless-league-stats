import cookie from "js-cookie";
import * as Vibrant from 'node-vibrant'
import axios from "axios";

// https://jariz.github.io/vibrant.js/ | https://github.com/Vibrant-Colors/node-vibrant

let currentTheme = cookie.get("theme") ? cookie.get("theme") : process.env.NEXT_PUBLIC_DEFAULT_THEME;

export function getChampionBackground(){

    // https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{Champion}_0.jpg

    axios.get(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentTheme}_0.jpg`)
    .catch(error => {
        if(error) cookie.set("theme", process.env.NEXT_PUBLIC_DEFAULT_THEME);
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${process.env.NEXT_PUBLIC_DEFAULT_THEME}_0.jpg`
    });

    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentTheme}_0.jpg`
}

export function getChampionIcon(){

    // https://ddragon.leagueoflegends.com/cdn/{Version}/img/champion/{Champion}.png
    let version = "11.24.1"

    axios.get("https://ddragon.leagueoflegends.com/api/versions.json").then(response => {
        version = response.data[0];
    });
    axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${currentTheme}.png`)
    .catch(error => {
        if(error) cookie.set("theme", process.env.NEXT_PUBLIC_DEFAULT_THEME);
        return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${process.env.NEXT_PUBLIC_DEFAULT_THEME}.png`;
    });

    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${currentTheme}.png`;
}

export function getChampionColors(){

    let theme = {};

    axios.get(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentTheme}_0.jpg`)
    .catch(error => {
        if(error) cookie.set("theme", process.env.NEXT_PUBLIC_DEFAULT_THEME);
        cookie.set("theme", "Gwen");
        currentTheme = process.env.NEXT_PUBLIC_DEFAULT_THEME;
    });

    Vibrant.from(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentTheme}_0.jpg`)
        .getPalette()
        .then((palette) => {theme.pallete = (palette)})

    return theme;

}

