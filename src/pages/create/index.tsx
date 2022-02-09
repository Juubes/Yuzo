import Button from "@components/Button";
import Header from "@components/Header";
import AuthProvider from "@contexts/AuthProvider";
import GlobalStateProvider from "@contexts/GlobalStateProvider";
import React, { FormEvent, useState } from "react";

function CreatePostPage(props) {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");

    const submitForm = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <AuthProvider>
                <GlobalStateProvider>
                    <Header></Header>
                    <form onSubmit={submitForm} className="grid">
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={title}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                                className=""
                            />
                        </label>
                        <label>
                            Image:
                            <input
                                type="file"
                                name="image"
                                value={file}
                                onChange={(event) =>
                                    setFile(event.target.value)
                                }
                                accept="png"
                                className=""
                            />
                        </label>
                        <Button>
                            <input type="submit" />
                        </Button>
                    </form>
                </GlobalStateProvider>
            </AuthProvider>
        </>
    );
}

export default CreatePostPage;
