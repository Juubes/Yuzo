import React, { useContext, useEffect, useState } from "react";
import { auth, provider } from "@services/firebase";
import { signInWithPopup, UserCredential } from "firebase/auth";

const AuthContext = React.createContext(null);

function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    function signIn() {
        return signInWithPopup(auth, provider)
            .then((user) => {
                setUser(user.user);
            })
            .catch((err) => console.log(err));
    }
    
    function logout() {
        auth.signOut();
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
        return unsub;
    }, []);

    const value = {
        signIn,
        logout,
        user
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export function useAuth(): {
    signIn: Function;
    logout: Function;
    user: UserCredential;
} {
    return useContext(AuthContext);
}
