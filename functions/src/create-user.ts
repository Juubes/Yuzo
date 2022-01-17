import * as functions from "firebase-functions";

let handler = functions.https.onRequest((req, res) => {
    if (req.method != "POST") return;
    res.json({ status: "OK" });
});

export default handler;
