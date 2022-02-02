import { stringify } from "@firebase/util";
import React, { FormEvent, useState } from "react";

function CreatePostPage(props) {
    const [state, setState] = useState({ title: "", file: null });

    const submitForm = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={submitForm}>
                <label>
                    Name:
                    <input type="text" name="name" value={state.title} />
                    Image:
                    <input type="file" name="image" value={state.file} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default CreatePostPage;
