import React, {useEffect} from "react";

export default function Background({children}) {

    useEffect(() => {

    });

    return (
        <div className="w-screen h-screen bg-custom-100 absolute">
            <div className="flex h-screen">
                <div className="m-auto">
                    <img className="animate-spin h-24 w-24 mr-3" src="https://cdn.discordapp.com/attachments/783044268615794781/923946563011739708/unknown.png"></img>
                </div>
            </div>
        </div>
    );
}
