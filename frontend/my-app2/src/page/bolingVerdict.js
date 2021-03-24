import React from "react";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓는다.</p>;
    }
    return <p>물이 안 끓는다.</p>;
}

export default BoilingVerdict;