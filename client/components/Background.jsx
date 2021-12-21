import { getChampionBackground } from "../themes/Champions";
import React, {useEffect} from "react";

export default function Background({children}) {

    useEffect(() => {
        document.getElementById("background").style.backgroundImage = `url('${getChampionBackground()}')`
    });

    return (
        <div id="background" className={"fadeIn h-screen saturate-50 contrast-150 bg-center bg-no-repeat bg-cover"}>
            {children}
        </div>
    );
}
