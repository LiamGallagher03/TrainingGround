import React, { useState } from 'react'

const AddScore = () => {

    const [score, setScore] = useState('')
    
    
    const addPoint = () => {
        const config = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                score
            })
        }
        fetch("/addScore", config)
    }


    return (
        <div>
            <input
                onClick={addPoint}
                type="submit"
            />
        </div>
    )
}

export default AddScore 