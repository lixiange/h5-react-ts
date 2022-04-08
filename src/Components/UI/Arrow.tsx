import React from "react";

interface Iprops {
    color?: string,
    direction: 'left' | 'top' | 'right' | 'bottom'
}

Arrow.defaultProps = {
    color:'#000'
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
