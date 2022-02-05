import * as React from "react";
import { useContext, useState } from "react";

const GlobalStateContext = React.createContext(null);

function GlobalStateProvider({ children }) {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [maximizedPost, setMaximizedPost] = useState(null);

    const value = {
        settingsOpen,
        maximizedPost,
        setSettingsOpen,
        setMaximizedPost
    };

    return (
        <GlobalStateContext.Provider value={value}>
            {children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalStateProvider;

export function useGlobalState() {
    return useContext(GlobalStateContext);
}
