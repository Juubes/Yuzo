import Head from "next/head";
import Button from "../components/Button.tsx";

function App() {
    return (
        <>
            <Head>
                <title>Yuzo</title>
                <meta
                    name="description"
                    content="Social media project using Google's image recognition API with NextJS & Firebase."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>header</header>

            <main>
                <Button>Test button</Button>
            </main>

            <footer>footer</footer>
        </>
    );
}

export default App;
