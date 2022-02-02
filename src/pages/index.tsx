import Head from "next/head";
import Header from "@components/Header";
import Main from "@components/Main";
import AuthProvider from "src/contexts/AuthProvider";
import GlobalStateProvider from "src/contexts/StateProvider";

function Index() {
    return (
        <>
            <Head>
                <title>Yuzo</title>
            </Head>
            <GlobalStateProvider>
                <AuthProvider>
                    <Header />
                    <div className="mt-6 mx-auto w-1/2 flex justify-center">
                        <Main />
                    </div>
                </AuthProvider>
            </GlobalStateProvider>
        </>
    );
}

export default Index;
