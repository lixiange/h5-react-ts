import React from "react";
import classNames from "classnames/bind";
import type { ReactElement } from 'react'

import styles from "./skeleton.module.scss";
let cx = classNames.bind(styles);

type Iprops = {
    style: object,
    loading: boolean,
    children: ReactElement
}

export default function BlockSkeleton(props: Iprops) {
    const { style, loading } = props;
    if (!loading) {
        return <div className={cx("content-box")}>{props.children}</div>;
    }
    return (
        <div className={cx("skeleton-block")} style={style}>
            <div className={cx("loading")}></div>
        </div>
    );
}
