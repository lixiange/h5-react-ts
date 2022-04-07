import React, { useEffect, useRef, useCallback } from 'react';
import { cloneDeep } from 'lodash-es'
import { connect } from 'react-redux'
import classNames from 'classnames/bind';
import type { MouseEvent, FC } from 'react'
import { useHistory } from 'react-router-dom'

import { StoreState } from '@store'
import Header from './components/Header'
import {Arrow} from '@/Components/UI'
import { changeNumberStatus } from '@/store/actions'
import { MapStateToProps, MapDispatchToProps } from '@/types/types'


import styles from './style.module.scss';
let cx = classNames.bind(styles)


type Iprops = MapStateToProps<typeof mapStateToProps> & MapDispatchToProps<typeof mapDispatchToProps>;

function Index(props: Iprops): React.ReactElement {

    const history = useHistory();

    const domRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log(domRef.current);
        console.log(domRef.current!.classList);
        let test = { name: "linda" }
        console.log(cloneDeep(test))
        // inputRef.current!.focus()
    }, [props]);

    useEffect(() => {

        try {
            let a: string = 'test';
            console.log(a as string)

        } catch (error: any) {
            console.log((error).message)
        }

    }, []);

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value)
        },
        [],
    );

    const selectItem = useCallback(
        (e: MouseEvent<HTMLLIElement>, index) => {
            console.log(e.nativeEvent.clientX)
        },
        [],
    );

    return (
        <div className={cx('home')}>
            <Header title={'头部組件'} />
            home页
            <div ref={domRef} className='test' onClick={() => { history.push('/login') }}>
                跳转到login页
            </div>
            <input type="text" onChange={onChange} />
            <button onClick={() => { props.changeNumberStatus(3) }}>点击改变number值</button>
            <div>{props.data.number}</div>
            <ul>
                <li onClick={event => selectItem(event, 1)}>1</li>
                <Arrow direction='right'/>
            </ul>
        </div>
    );
}

const mapStateToProps = (state: StoreState) => {
    return {
        data: state.Home.data
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeNumberStatus(data: number) {
            return dispatch(changeNumberStatus(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);