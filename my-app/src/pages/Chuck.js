import React, { useEffect, useState } from 'react'

const Chuck = () => {
    const [joke, setJoke] = useState(0)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://api.chucknorris.io/jokes/random')
            const responseJson = await response.json()
            setJoke(responseJson.value)
        }

        getData()
    }, [])

    return (
        <div>{joke}</ div>
    )
}

export default Chuck