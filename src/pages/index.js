import Head from "next/head";
import Image from "next/image";

import backArrowImg from "@images/arrow.png";
import settingsImg from "@images/settings.webp";
import Post from "./Post";

const POSTS = [
    {
        id: "1",
        imageUrl:
            "https://i1.sndcdn.com/artworks-hc8qCVYn3QOX8ztv-A8QzHA-t500x500.jpg",
        imageTitle: "Shrek"
    },
    {
        id: "2",
        imageUrl:
            "https://i1.sndcdn.com/artworks-hc8qCVYn3QOX8ztv-A8QzHA-t500x500.jpg",
        imageTitle: "Shrek"
    },
    {
        id: "3",
        imageUrl:
            "https://i1.sndcdn.com/artworks-hc8qCVYn3QOX8ztv-A8QzHA-t500x500.jpg",
        imageTitle: "Shrek"
    },
    {
        id: "4",
        imageUrl:
            "https://i1.sndcdn.com/artworks-hc8qCVYn3QOX8ztv-A8QzHA-t500x500.jpg",
        imageTitle: "Shrek"
    }
];

function Index() {
    let showBackButton = false;

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
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Modak&family=Zen+Antique+Soft&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <header className="bg-orange-300 pl-7 text-8xl flex">
                <div className="self-center flex absolute">
                    {!showBackButton || (
                        <Image
                            width="40px"
                            height="40px"
                            src={backArrowImg}
                            alt="arrow"
                        />
                    )}
                </div>
                <div
                    style={{ fontFamily: "Modak" }}
                    className="text-center w-full pt-3"
                >
                    Yuzo
                </div>
                <div className="self-center flex absolute right-10">
                    {showBackButton || (
                        <Image
                            width="60px"
                            height="60px"
                            src={settingsImg}
                            alt="arrow"
                        />
                    )}
                </div>
            </header>

            <div className="mt-6 mx-auto w-1/2 flex justify-center">
                <main className="min-h-screen max-w-3xl">
                    {POSTS.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            imageUrl={post.imageUrl}
                            imageTitle={post.imageTitle}
                        />
                    ))}
                </main>
            </div>
        </>
    );
}

export default Index;
