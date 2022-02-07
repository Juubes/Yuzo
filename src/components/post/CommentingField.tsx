import Button from "@components/Button";
import { functions } from "@services/firebase";
import { httpsCallable } from "firebase/functions";
import React, { useState } from "react";

function CommentingField(props) {
    const [value, setValue] = useState("");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(null);

    const sendComment = () => {
        setSending(true);

        (async () => {
            try {
                const result = await httpsCallable(
                    functions,
                    "sendComment"
                )({ value });
                if (result.data) {
                }
                props.closeCommenting();
                setSending(false);
            } catch (ex) {
                setError("Cannot connect to the comment API.");
                setSending(false);
            }
        })();
    };

    return (
        <div className="flex flex-col gap-3 h-20 md:flex-row pb-3">
            {error && (
                <div className="absolute bottom-2 text-lg rounded border-red-900 border-2 bg-red-500">
                    {error}
                </div>
            )}
            <textarea
                autoFocus
                className="w-full color-primary rounded border-0 text-2xl resize-none p-2"
                placeholder="What do you think?"
                onChange={(event) => {
                    setValue(event.target.value);

                    setError(null);
                }}
                onKeyDown={(event) => {
                    if (event.code == "Escape") {
                        if (value == "") props.closeCommenting();
                        else setError(null);
                    }

                    if (event.code == "Enter") {
                        // People might want to add more lines with Alt + Enter, stop it
                        if (event.altKey || event.shiftKey) return;

                        // Send
                        event.preventDefault();
                        sendComment();
                    }
                }}
                value={value}
            />
            <Button
                primary
                onClick={() => sendComment()}
                className="rounded w-52"
            >
                {sending ? "Sending..." : "Send"}
            </Button>
        </div>
    );
}

export default CommentingField;
