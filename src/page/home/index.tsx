import React, { useEffect, useRef, useCallback, useState } from 'react';
import { cloneDeep } from 'lodash-es'
import { connect } from 'react-redux'
import classNames from 'classnames/bind';
import type { MouseEvent, FC, Dispatch } from 'react'
import { useHistory } from 'react-router-dom'


import { StoreState } from '@store'
// import Header from './components/Header'
import { Header } from '@/Components/UI'
import { Arrow } from '@/Components/UI'
import $request from '@/request/api'
import { changeNumberStatus } from '@/store/actions'
import { MapStateToProps, MapDispatchToProps, EnthusiamAction } from '@types'



import styles from './style.module.scss';
import dealError from '@/request/ajaxError';
let cx = classNames.bind(styles)


type Iprops = MapStateToProps<typeof mapStateToProps> & MapDispatchToProps<typeof mapDispatchToProps>;
type test = (...args: any) => any;
type name<T> = { [P in keyof T]: string
}

type List = {
    loading: boolean,
    data: Array<number>
}

type ss = string | number;

enum Direction {
    west = 'west',
    north = 'north'
}


const Index: FC<Iprops> = (props) => {

    const history = useHistory();

    const domRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const [Index, setIndex] = useState({ loading: false, data: [] } as List);

    useEffect(() => {
        console.log(domRef.current!.classList);
        inputRef.current!.focus()
        let test: Array<ss> = [1, 2, 'hah'];
        console.log(test)
        console.log(Direction.west)
    }, [props]);

    useEffect(() => {
        async function getData() {
            let { error, res } = await dealError($request.pageLog, {
                behavior: '11',
                behaviorDesc: '11',
                logType: 1,
                behaviorType: 1,
            })

            if (error) return;
            console.log(res!.data.age)

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
            <Header >
                <div ref={domRef} className='test' onClick={() => { history.push('/login') }}>
                    跳转到login页
                </div>
                <input ref={inputRef} type="text" onChange={onChange} />
                <button onClick={() => { props.changeNumberStatus(3) }}>点击改变number值</button>
                <div>{props.data.number}</div>
                <ul>
                    <li onClick={event => selectItem(event, 1)}>1</li>
                    <Arrow direction='right' />
                </ul>

            </Header>

        </div>
    );
}

const mapStateToProps = (state: StoreState) => {
    return {
        data: state.Home.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch<EnthusiamAction>) => {
    return {
        changeNumberStatus(data: number) {
            return dispatch(changeNumberStatus(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);