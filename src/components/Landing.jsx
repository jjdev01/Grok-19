import React from "react";

const Title = () => {
    return <h1> Thank you for placing your order!</h1>;
};

const Body = () => {
    return (
        <div>
            <p>Example</p>
        </div>
    );
};

export default function Landing() {
    return (
        <div>
            <Title />
            <Body />
        </div>
    );
}
