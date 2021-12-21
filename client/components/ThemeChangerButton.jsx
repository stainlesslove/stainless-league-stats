import { getChampionIcon } from "../themes/Champions";
import React, {useEffect} from "react";

export default function ThemeChangerButton() {

    function ye(){
        console.log("ye");
    }

    useEffect(() => {
        document.getElementById("theme_switcher_icon").src = getChampionIcon();
    });

    return (
        <img id="theme_switcher_icon" onClick={ye} draggable="false" className="opacity-30 cursor-pointer object-cover w-14 h-14 rounded-full hover:opacity-100 hover:border-2 border-red-400" src="https://gcdn.thunderstore.io/live/repository/icons/Nines-Katarina-1.2.6.png.256x256_q95.jpg"></img>
    )

}