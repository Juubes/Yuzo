import * as functions from "firebase-functions";

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

const getFeed = functions
    .runWith({ memory: "128MB", maxInstances: 1, timeoutSeconds: 20 })
    .region("europe-west1")
    .https.onRequest((req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");

        res.send({ data: POSTS });
    });

export default getFeed;
