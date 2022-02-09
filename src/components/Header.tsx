import backArrowImg from "@images/arrow.png";
import settingsImg from "@images/settings.webp";
import Image from "next/image";
import React, { useState } from "react";
import { useAuth } from "src/contexts/AuthProvider";
import { useGlobalState } from "src/contexts/GlobalStateProvider";
import Button from "./Button";

function Header() {
    const [showBackButton] = useState(false);

    return (
        <header className="color-primary text-8xl flex">
            <div className="self-center flex absolute pl-7">
                {showBackButton && (
                    <Image
                        width="40px"
                        height="40px"
                        src={backArrowImg}
                        alt="back button"
                    />
                )}
            </div>
            <div
                style={{ fontFamily: "Modak" }}
                onClick={() => {}}
                className="text-center w-full pt-3"
            >
                Yuzo
            </div>

            <div className="self-center flex absolute right-10 hover:scale-110 transition">
                <SettingsLoginButton />
            </div>
        </header>
    );
}

function SettingsLoginButton() {
    const { setSettingsOpen, settingsOpen } = useGlobalState();
    const auth = useAuth();

    if (!auth.user)
        return (
            <Button
                secondary
                onClick={() => auth.signIn()}
                className="text-3xl font-bold"
            >
                Login
            </Button>
        );

    return (
        <>
            {
                <Image
                    width="60px"
                    height="60px"
                    src={settingsImg}
                    onClick={() => setSettingsOpen(!settingsOpen)}
                    alt="settings"
                />
            }
        </>
    );
}

export default Header;
