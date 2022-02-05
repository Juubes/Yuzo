import React from "react";
import SettingsArea from "./Settings";
import Feed from "./Feed";
import { useGlobalState } from "@contexts/GlobalStateProvider";

function Main() {
    const { settingsOpen } = useGlobalState();

    return (
        <main className="m-5 mx-auto max-w-lg min-w-[200px]">
            <Feed visible={!settingsOpen} />

            {settingsOpen && <SettingsArea />}
        </main>
    );
}

export default Main;
