import React from "react";
import SettingsArea from "./Settings";
import Feed from "./Feed";
import { useGlobalState } from "@contexts/GlobalStateProvider";

function Main() {
    const { settingsOpen } = useGlobalState();

    return (
        <main className="w-full">
            <Feed visible={!settingsOpen} />

            {settingsOpen && <SettingsArea />}
        </main>
    );
}

export default Main;
