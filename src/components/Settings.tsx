import { useAuth } from "src/contexts/AuthProvider";

function SettingsArea(props: { closeSettings }) {
    const auth = useAuth();

    return (
        <>
            <h1>
                Logged in as <em>{auth.user.email}</em>
            </h1>
            <button
                className="font-bold text-blue-500"
                onClick={() => {
                    auth.logout();
                    props.closeSettings();
                }}
            >
                Logout
            </button>
        </>
    );
}

export default SettingsArea;
