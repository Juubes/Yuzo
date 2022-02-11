import { useAuth } from "src/contexts/AuthProvider";
import { useGlobalState } from "src/contexts/GlobalStateProvider";

function SettingsArea() {
    const { setSettingsOpen } = useGlobalState();
    const auth = useAuth();

    console.log(auth)

    return (
        <>
            <h1>
                Logged in as <em>{auth.user.email}</em>
            </h1>
            <button
                className="font-bold text-blue-500"
                onClick={() => {
                    auth.logout();
                    setSettingsOpen(false);
                }}
            >
                Logout
            </button>
        </>
    );
}

export default SettingsArea;
