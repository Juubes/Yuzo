import * as React from "react";

const GlobalStateContext = React.createContext(null);

function GlobalStateProvider({ children }) {
    const [settingsOpen, setSettings] = React.useState(false);

    const setSettingsOpen = (val) => {
        setSettings(val);
    };

    const value = {
        settingsOpen,
        setSettingsOpen
    };

    return (
        <GlobalStateContext.Provider value={value}>
            {children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalStateProvider;

export function useGlobalState() {
    return React.useContext(GlobalStateContext);
}
