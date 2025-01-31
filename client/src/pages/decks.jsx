import React, {useState} from "react"
import DeckList from "../components/DeckList"

export default function Decks() {
  const [decks, setDecks] = useState(SAMPLE_DECKS)
  return(
    <>
      <DeckList decks={SAMPLE_DECKS}/>
    </>
    
  )
}


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