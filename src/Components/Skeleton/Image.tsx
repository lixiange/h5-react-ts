import type { ReactElement } from 'react'
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./skeleton.module.scss";
let cx = classNames.bind(styles);

type Iprops = {
    imgUrl: string,
    onLoadDone: (id?: number | string) => any,
    style: object,
    id?: number | string,
    children: ReactElement
}

export default function ImgSkeleton(props: Iprops) {
    const { imgUrl, onLoadDone, style, id } = props;
    const [imgLoadDone, setImgLoadState] = useState(false);
    useEffect(() => {
        let isUnmount = false;
        if (imgUrl) {
            const img = new Image();
            img.src = imgUrl;
            img.onload = function () {
                if (isUnmount) return;
                setImgLoadState(true);
                if (typeof onLoadDone === "function") {
                    onLoadDone(id);
                }
            };
        }
        return () => {
            isUnmount = true;
        };
    }, [imgUrl, onLoadDone, id]);

    return (
        <div className={cx("skeleton-img")} style={style}>
            {imgLoadDone ? (
                <div className={cx("content-box")}>{props.children}</div>
            ) : (
                <div className={cx("loading")}></div>
            )}
        </div>
    );
}
