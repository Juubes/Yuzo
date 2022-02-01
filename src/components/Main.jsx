import { functions } from "@services/firebase";
import { httpsCallable } from "firebase/functions";
import React, { useEffect, useState } from "react";
import SettingsArea from "./Settings";
import Feed from "./Feed";
import { useGlobalState } from "src/contexts/StateProvider";

function Main(props) {
    const [posts, setPosts] = useState([]);
    const [maximizedPost, setMaximizedPost] = useState(null);

    const { settingsOpen } = useGlobalState();

    // Load posts
    useEffect(() => {
        (async function () {
            try {
                const result = await httpsCallable(functions, "getFeed")();
                setPosts(result.data);
            } catch (ex) {
                console.log("Couldn't get posts from API");
                console.log(ex);
            }
        })();
    }, []);

    return (
        <main className="min-h-screen max-w-3xl">
            {!settingsOpen ? (
                <Feed
                    posts={posts}
                    maximizedPost={maximizedPost}
                    setMaximizedPost={setMaximizedPost}
                />
            ) : (
                <SettingsArea
                    closeSettings={() => props.setSettingsOpen(false)}
                />
            )}
        </main>
    );
}

export default Main;
