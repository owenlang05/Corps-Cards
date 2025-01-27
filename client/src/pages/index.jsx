import React, {useState} from 'react'
import FlashcardList from '../components/FlashcardList'
import Navigation from '../components/Navbar'

export default function Home () {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    return(
    <>
      <Navigation/>
        <div className='carasel-container'>
            <FlashcardList flashcards = {flashcards} />
        </div>
    </>
    )
}

const SAMPLE_FLASHCARDS = [
    {
      id: 1,
      question: 'What is 2+2?',
      answer: '4',
      options: [
        '2',
        '3',
        '4',
        '5'
      ]
    },
    {
      id: 2,
      question: 'Question 2?',
      answer: 'Answer',
      options: [
        'Answer',
        '3',
        '4',
        '5'
      ]
    },
    {
      id: 3,
      question: 'Question 3?',
      answer: 'Answer',
      options: [
        '2',
        '3',
        'Answer',
        '5'
      ]
    }
  ]
  
  const SAMPLE_DECKS = [
    {
      id: 1,
      name: "Deck 1"
    },
    {
      id: 2,
      name: "Deck 2"
    },
    {
      id: 3,
      name: "Deck 3"
    },
    {
      id: 4,
      name: "Deck 4"
    },
    {
      id: 5,
      name: "Deck 5"
    },
    {
      id: 6,
      name: "Deck 6"
    }
  ]