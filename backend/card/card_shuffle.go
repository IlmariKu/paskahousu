package card

import (
	"math/rand"
	"time"
)

// ShuffleCardDeck takes a 52 card deck and shuffles them into a random order
func ShuffleCardDeck(cardDeck Deck) Deck {
	rand.Seed(time.Now().Unix())

	rand.Shuffle(len(cardDeck), func(i, j int) {
		cardDeck[i], cardDeck[j] = cardDeck[j], cardDeck[i]
	})

	rand.Shuffle(len(cardDeck), func(i, j int) {
		cardDeck[i], cardDeck[j] = cardDeck[j], cardDeck[i]
	})
	return cardDeck
}
