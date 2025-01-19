import React, {useState, useRef} from 'react'

export default function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false)
    const frontEl = useRef()
    const backEl = useRef()

    return (
        <div
        className={`flashcard ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className='front' ref={frontEl}>
                {flashcard.question}
            </div>

            <div className='back' ref={backEl}>{flashcard.answer}</div>
        </div>
    )
}
