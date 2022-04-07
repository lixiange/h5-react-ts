import type { ReactElement,FC } from 'react'
import React, { useState } from "react";
import classNames from "classnames/bind";
import "./style.scss";

interface Iprops {
    style: object,
    onClick: () => {},
    children: ReactElement
}

export default function Button(props: Iprops) {
    const [isPress, setPressState] = useState(false);
    const { style, onClick = () => { } } = props;
    return (
        <div
            onTouchStart={() => {
                setPressState(true);
            }}
            onTouchEnd={() => {
                setPressState(false);
            }}
            onClick={onClick}
            className={classNames({
                "ubutton": true,
                isActive: isPress,
            })}
            style={style}
        >
            {props.children}
        </div>
    );
}
