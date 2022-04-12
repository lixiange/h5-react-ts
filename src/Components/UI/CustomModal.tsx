import React, { Component, useState, useEffect } from "react";
import type { FC } from 'react'
import './style.scss'

interface Iprops {
    closeModal: () => {},
}

const CustomModal: FC<Iprops> = (props) => {
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        const scroll = window.scrollY;
        setScrollY(scroll)
        document.body.style.position = "fixed";
        document.body.style.top = String(scrollY);
        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            window.scrollTo(0, scrollY);
        }
    }, [scrollY]);
    return <div
        className="customModal_wrapper"
        onClick={() => {
            props.closeModal();
        }}
    >
        {props.children}
    </div>;
}
export default CustomModal