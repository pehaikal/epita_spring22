import React, {useState} from 'react'

export const Button = () => {
    const [count, setCount] = useState(0)

    const onClickHandler = (event) => {
        setCount(count + 1);
    }

    return (<>
            <div>{count}</div>
            <button onClick={onClickHandler}>Add</button>
    </>)
}

export default Button