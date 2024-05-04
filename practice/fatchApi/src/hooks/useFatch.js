import { useEffect } from "react"
import { useState } from "react"

const fetchData = () => {
    const [data, setdata] = useState({})

    useEffect(() => { 
        fetch("https://api.github.com/users/vishalbodkhe531")
            .then((res) => res.json())
            .then((res) => setdata(res))
            .catch((err) => console.log(`error while fetching data ${err}`))
    }, [])
    return [data,setdata]
}

export default fetchData;