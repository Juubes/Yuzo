import backArrowImg from "@images/arrow.png";
import settingsImg from "@images/settings.webp";
import { auth, provider } from "@services/firebase";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";
import React, { useReducer, useState } from "react";
import { useAuth } from "src/contexts/AuthProvider";

function Header(props: { openSettings: Function }) {
    const [showBackButton, setShowBackButton] = useState(false);
    const [showSettingsbutton, setShowSettingsbutton] = useState(true);

    const { openSettings } = props;

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
                <SettingsLoginButton
                    showSettingsbutton={showSettingsbutton}
                    openSettings={openSettings}
                />
            </button>
        </header>
    );
}

function SettingsLoginButton(props) {
    const value = useAuth();

    if (!value.user) return <LoginButton />;

    return (
        <>
            {
                <Image
                    width="60px"
                    height="60px"
                    src={settingsImg}
                    onClick={() => props.openSettings()}
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
