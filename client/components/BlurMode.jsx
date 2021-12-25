import { useEffect } from "react"


export default function BlurMode({children}) {

    return (
        <div className="absolute h-screen w-screen">
            <div id="blur_mode" className="fixed w-screen h-screen bg-gradient-to-b from-custom-600 to-custom-100 opacity-70" style={{display: "none"}}></div>
            {children}
        </div>
    )

}