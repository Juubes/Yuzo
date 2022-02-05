import { functions } from "@services/firebase";
import { httpsCallable } from "firebase/functions";
import React, { useEffect, useState } from "react";
import SettingsArea from "./Settings";
import Feed from "./Feed";
import { useGlobalState } from "src/contexts/GlobalStateProvider";

function Main(props) {

    const { settingsOpen } = useGlobalState();


    return (
        <main className="m-5 mx-auto max-w-lg min-w-[200px]">
            {!settingsOpen ? <Feed /> : <SettingsArea />}
        </main>
    );
}

export default Main;
