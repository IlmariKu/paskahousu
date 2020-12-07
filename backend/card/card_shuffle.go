package card

import "math/rand"

// ShuffleCardDeck takes a 52 card deck and shuffles them into a random order
func ShuffleCardDeck(cardDeck Deck) (shuffledCardDeck []Deck) {
	for index := range cardDeck {
		newPosition := rand.Intn(index + 1)
		cardDeck[index], cardDeck[newPosition] = cardDeck[newPosition], cardDeck[index]
		shuffledCardDeck = append(shuffledCardDeck, cardDeck)
	}
	return shuffledCardDeck

}
