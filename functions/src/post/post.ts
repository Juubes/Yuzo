import * as functions from "firebase-functions";
import vision from "@google-cloud/vision";

const createPost = functions
    .runWith({ memory: "2GB", maxInstances: 2, timeoutSeconds: 20 })
    .https.onRequest(async (req, res) => {
        if (req.method != "POST") {
            res.sendStatus(405);
            return;
        }

        // TODO: Validate post data
        const image = req?.body?.image;

        if (!image) {
            res.statusCode = 400;
            res.send("No image in request");
            return;
        }

        // Send data to be analyzed to Google's API
        const client = new vision.ImageAnnotatorClient();

        const [result] = await client.labelDetection(image);

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
