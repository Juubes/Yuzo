import * as React from "react";

function Button(props: {
    primary?;
    secondary?;
    children?;
    onClick?;
    className?;
}) {
    const { primary, secondary } = props;

    let color;
    if (secondary) color = "color-secondary";
    else color = "color-primary";

    return (
        <button
            {...props}
            className={`text-3xl rounded-lg ${color} px-5 py-2 shadow-lg font-medium`}
        >
            {props.children}
        </button>
    );
}

export default Button;
