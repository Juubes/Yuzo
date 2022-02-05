import * as functions from "firebase-functions";

// TODO put to db
const POSTS = [
    {
        id: "1",
        imageUrl:
            "https://i1.sndcdn.com/artworks-hc8qCVYn3QOX8ztv-A8QzHA-t500x500.jpg",
        imageTitle: "Shrek",
        comments: [
            {
                username: "Jussi",
                comment: "Nice 5/5",
                timestamp: 1159352399574,
                replies: []
            },
            {
                username: "Jaakob",
                comment: "Kaunis",
                timestamp: 1259352399574,
                replies: []
            },
            {
                username: "Onni",
                comment: "Mä pelaan lolia",
                timestamp: 1643499118300,
                replies: [
                    {
                        username: "Juho",
                        comment: "Et sä osaa",
                        timestamp: 1643489118300
                    }
                ]
            },
            {
                username: "Jorma",
                comment: "Iha ok mut onks OG",
                timestamp: 1559352399574,
                replies: []
            }
        ].sort((d, d2) => d2.timestamp - d.timestamp)
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
