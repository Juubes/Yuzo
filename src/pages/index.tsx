import Head from "next/head";
import Header from "@components/Header";
import { useState } from "react";
import Main from "@components/Main";

function Index() {
    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Yuzo</title>
                <meta
                    name="description"
                    content="Social media project using Google's image recognition API with NextJS & Firebase."
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Modak&family=Zen+Antique+Soft&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header
                openSettings={() => {
                    setSettingsOpen(true);
                }}
            />
            <div className="mt-6 mx-auto w-1/2 flex justify-center">
                <Main settingsOpen={settingsOpen} />
            </div>
        </>
    );
}

export default Index;
