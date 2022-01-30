import { useRouter } from "next/router";
import { useAuth } from "src/contexts/AuthProvider";

function SettingsArea(props: { closeSettings }) {
    const auth = useAuth();

    return (
        <button
            onClick={() => {
                auth.logout();
                props.closeSettings();
            }}
        >
            Logout
        </button>
    );
}

export default SettingsArea;
