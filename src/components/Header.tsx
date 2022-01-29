import backArrowImg from "@images/arrow.png";
import settingsImg from "@images/settings.webp";
import Image from "next/image";
import React, { useState } from "react";

function Header(props: { toggleSettings: Function }) {
    const [showBackButton, setShowBackButton] = useState(false);
    const [showSettingsbutton, setShowSettingsbutton] = useState(true);

    const { toggleSettings } = props;

    return (
        <header className="bg-orange-300 text-8xl flex">
            <div className="self-center flex absolute pl-7">
                {showBackButton && (
                    <Image
                        width="40px"
                        height="40px"
                        src={backArrowImg}
                        alt="arrow"
                    />
                )}
            </div>
            <div
                style={{ fontFamily: "Modak" }}
                className="text-center w-full pt-3"
            >
                Yuzo
            </div>
            <button
                className="self-center flex absolute right-10 hover:scale-125 transition"
                onClick={() => toggleSettings()}
            >
                {showSettingsbutton && (
                    <Image
                        width="60px"
                        height="60px"
                        src={settingsImg}
                        alt="arrow"
                        onClick={() => toggleSettings()}
                    />
                )}
            </button>
        </header>
    );
}

export default Header;
