import Head from "next/head";
import Header from "@components/Header";
import Main from "@components/Main";
import AuthProvider from "src/contexts/AuthProvider";
import GlobalStateProvider from "src/contexts/GlobalStateProvider";

function Index() {
    return (
        <>
            <Head>
                <title>Yuzo</title>
            </Head>
            <GlobalStateProvider>
                <AuthProvider>
                    <Header />
                    <Main />
                </AuthProvider>
            </GlobalStateProvider>
        </>
    );
}

export default Index;
