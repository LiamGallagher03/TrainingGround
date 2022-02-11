import React, {useEffect, useState} from 'react';

const Score = () => {
    const [score, setScore] = useState("")
    useEffect(() => {
        fetch("/score")
            .then(res => res.json())
            .then(data => {
                setScore(data.score)
            })
    }, [])

    const addScore = () => {
        setScore(score + 1)
    }
    //1.b. fetch score from express server

    //1.c. render score in JSX/HTML
  return <div>
      <h1>Score: {score}</h1>
      <input
        onClick={addScore}
        type="Submit"
        value="Add Point"
        />
  </div>;
};

export default Score;
