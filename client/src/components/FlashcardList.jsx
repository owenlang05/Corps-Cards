import { useState } from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({flashcards}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [flashcard, setFlashcard] = useState(flashcards[0])
    const onChangeIndex  = (value) => {
        setActiveIndex(Math.max(0,Math.min(activeIndex+value, flashcards.length-1)))
        setFlashcard(flashcards[activeIndex])
    }
    return (
        <>
            <Flashcard flashcard={flashcard} />
            <div className='card-carosel'>
                <button onClick={() => {
                    onChangeIndex(-1)}}>
                    {"<"}--
                </button>
                <p className='card-index'>{activeIndex+1}</p>
                <button onClick={() => {onChangeIndex(1)}}>
                    --{">"}
                </button>
            </div>
        </>

    )
}