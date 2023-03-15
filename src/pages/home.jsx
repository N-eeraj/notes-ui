import api from "@axios"
import { useEffect } from "react"

export default function() {
    useEffect(() => {
        api.get('/ping')
    })
    return (
        <h1>
            Home
        </h1>
    )
}