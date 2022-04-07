import React, { Component, useState, useEffect } from "react";
import type{ReactElement} from 'react'
import './style.scss'

interface Iprops{
    closeModal: () => {},
    children:ReactElement
}

export default function Index(props:Iprops) {
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
