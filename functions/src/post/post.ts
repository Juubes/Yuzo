import * as functions from "firebase-functions";
import vision from "@google-cloud/vision";

const createPost = functions
    .runWith({ memory: "2GB", maxInstances: 2, timeoutSeconds: 20 })
    .https.onRequest(async (req, res) => {
        if (req.method != "POST") {
            res.sendStatus(400);
            return;
        }

        // Validate post data

        // let data;

        // Send data to be analyzed to Google's API
        const client = new vision.ImageAnnotatorClient();

        const URL =
            "https://i.insider.com/5fa58abe1df1d5001821952e?width=1200&format=jpeg";

        // Performs label detection on the image file
        const [result] = await client.labelDetection(URL);

        let labels = result.labelAnnotations;
        if (labels == null) {
            res.json([]);
            return;
        }

        // Take most important attributes
        labels = labels.map((label) => {
            const { description, confidence, score, mid, topicality } = label;

            return {
                description,
                confidence,
                score,
                mid,
                topicality
            };
        });

        res.json(labels);
    });

export default createPost;
