import React from "react";

interface Iprops {
    color?: string |'#000',
    direction: 'left' | 'top' | 'right' | 'bottom'
}

function Arrow(props: Iprops) {
    return (
        <span
            style={{ borderTopColor: props.color, borderRightColor: props.color }}
            className={`arrow  arrow${props.direction}`}
        ></span>
    );
}

export default Arrow;
