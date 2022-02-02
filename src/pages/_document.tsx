import { Html, Head } from "next/document";
import Index from ".";

export default function Document() {
    return (
        <Html>
            <Head>
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
            <body>
                <Index />
            </body>
        </Html>
    );
}
