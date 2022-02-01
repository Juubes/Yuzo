import Head from "next/head";
import Header from "@components/Header";
import Main from "@components/Main";
import AuthProvider from "src/contexts/AuthProvider";
import GlobalStateProvider from "src/contexts/StateProvider";

function Index() {
    return (
        <GlobalStateProvider>
            <AuthProvider>
                <Head>
                    <title>Yuzo</title>
                    <meta
                        name="description"
                        content="Social media project using Google's image recognition API with NextJS & Firebase."
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Modak&family=Zen+Antique+Soft&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <Header />
                <div className="mt-6 mx-auto w-1/2 flex justify-center">
                    <Main />
                </div>
            </AuthProvider>
        </GlobalStateProvider>
    );
}

export default Index;
