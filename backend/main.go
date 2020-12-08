package main

import (
	"fmt"

	"github.com/paskahousu/backend/card"
)

func main() {
	cardDeck := card.GetCardsForPlayers()
	fmt.Printf("%+v\n", len(cardDeck))
	fmt.Printf("%+v\n", cardDeck)
	//}
}
