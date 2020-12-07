package card

import "math/rand"

func ShuffleCardDeck(cardDeck []Deck) []Deck {
	for index := range cardDeck {
		newPosition := rand.Intn(index + 1)
		cardDeck[index], cardDeck[newPosition] = cardDeck[newPosition], cardDeck[index]
	}
	return cardDeck

}
