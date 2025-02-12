import React, {useState} from "react";

export default function DeckList({decks}) {
    console.log(decks)
    return (
        <div>
            {decks?.map(({id, name}) => (
                <div key={id}>
                    <p>{name}</p>
                </div>
            ))}
        </div>

    )

}