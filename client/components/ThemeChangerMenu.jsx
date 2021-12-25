import {useEffect} from "react";

export default function ThemeChangerMenu() {

    return (
        <div className="absolute h-screen w-screen">
            <div className="flex justify-center items-center h-screen">
                <div id="theme_changer_menu" className="absolute max-w-md bg-custom-300 shadow-lg rounded-lg outline-100" style={{display: "none"}}>
                    <p className="mt-2 text-custom-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
                </div>
            </div>
        </div>
    )

}