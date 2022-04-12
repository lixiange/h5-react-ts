import type { ReactElement,FC } from 'react'
import React from "react";
import { useHistory } from "react-router-dom";
import logo from "@/static/images/logo.png";
import search from "@/static/images/icon/search.png";

import "./style.scss";

interface Iprops {
    type: 'noTab' | undefined;
    children: ReactElement[]
}

export default function Header(props: Iprops):ReactElement {
    const history = useHistory();
    return (
        <div className={`headerWrapper ${props.type === 'noTab' ? "bodyWrapper" : ""}`}>
            <div className="header">
                <div className="logo_box" onClick={() => { history.push('/home') }}>
                    <img src={logo} alt="logo" />
                </div>
                <div
                    className="search_box"
                    onClick={() => {
                        history.push("/search");
                    }}
                >
                    <img src={search} alt="" />
                </div>
            </div>
            {props.children}
        </div>
    );
}

Header.defaultProps = {
    type: undefined
}