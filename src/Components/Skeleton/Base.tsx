import React from "react";
import { range } from "lodash-es";
import classNames from "classnames/bind";
import type { ReactElement } from 'react';

import styles from "./skeleton.module.scss";
let cx = classNames.bind(styles);

type Iprops = {
    rows: number,
    style: object,
    lineStyle: object
    loading: boolean,
    children: ReactElement,
}

export default function Base(props: Iprops) {
    const { style, rows = 3, loading, lineStyle } = props;
    if (!loading) {
        return <div className={cx("content-box")}>{props.children}</div>;
    }
    return (
        <div className={cx("skeleton-base")} style={style}>
            {range(rows).map((row) => (
                <div className={cx("row-item")} style={lineStyle} key={row}>
                    <div className={cx("loading")}></div>
                </div>
            ))}
        </div>
    );
}
