import React, { useEffect, useState } from 'react';
import { RouteComponentProps, RouteChildrenProps, withRouter } from 'react-router-dom'

interface Iprops extends RouteComponentProps {
    title: string
}

type User = {
    name: string,
    age: number
}


const Index: React.FC<Iprops> = (props) => {
    const [user, setUser] = useState({} as User);
    // const [user, setUser] = useState<User | null>(null);
    const [number, setNumber] = useState<number[]>([])
    // const [number, setNumber] = useState([] as number[])


    useEffect(() => {
        setUser({ name: 'linda', age: 111 })
        setNumber([11])
    }, [])

    useEffect(() => {

        console.log(user!.name)

    }, [user]);
    return (
        <div>
            头部组件
            {props.title}
        </div>
    );
}

export default withRouter(Index);