import React from "react";

function Button() {
    return (
        <button onClick={onClick} className="bg-lime-500">
            Hello
        </button>
    );
}

function onClick(event) {}

export default Button;
