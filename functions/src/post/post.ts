import * as functions from "firebase-functions";

let handler = functions
    .runWith({ memory: "128MB", maxInstances: 1, timeoutSeconds: 20 })
    .https.onRequest((req, res) => {
        if (req.method != "POST") return;
        res.json({ status: "OK" });
    });

export default handler;
