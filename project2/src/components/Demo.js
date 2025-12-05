import React from "react";
import { useNameContext } from '../Context/NameContext'
const Demo = () => {
    const { name } = useNameContext();
    return (
        <>
            <p>Demo component is able to access {name} name from context</p>
        </>
    )
}
export default Demo;