import backArrowImg from "@images/arrow.png";
import settingsImg from "@images/settings.webp";
import { auth, provider } from "@services/firebase";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";
import React, { useReducer, useState } from "react";
import { useAuth } from "src/contexts/AuthProvider";
import { useGlobalState } from "src/contexts/StateProvider";

function Header(props) {
    const [showBackButton] = useState(false);

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
                onClick={() => {}}
                className="text-center w-full pt-3"
            >
                Yuzo
            </div>
            <button className="self-center flex absolute right-10 hover:scale-125 transition">
                <SettingsLoginButton />
            </button>
        </header>
    );
}

function SettingsLoginButton(props) {
    const { setSettingsOpen, settingsOpen } = useGlobalState();
    const value = useAuth();

    if (!value.user) return <LoginButton />;

    return (
        <>
            {
                <Image
                    width="60px"
                    height="60px"
                    src={settingsImg}
                    onClick={() => setSettingsOpen(!settingsOpen)}
                />
            }
        </>
    );
}

function LoginButton(props) {
    const auth = useAuth();
    return <div onClick={() => auth.signIn()}>Login</div>;
}

export default Header;
