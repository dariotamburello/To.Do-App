import { useState } from "react";
import { Moon, Sun } from "./icons/SetIcons";

export const ButtonDarkMode = () => {
    const [dark, setDark] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="">
            <button className="transition-all hover:scale-125 hover:rotate-[360deg] hover:duration-[2000ms] text-lg text-zinc-800 dark:text-zinc-200" onClick={() => darkModeHandler()}>
                {

                    dark && <Sun height='25px' width='25px' fill='transparent'></Sun>
                }
                {
                    !dark && <Moon height='25px' width='25px' fill='transparent'></Moon>
                }
            </button>
        </div>
    )
}
