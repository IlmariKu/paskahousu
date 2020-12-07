package card

import "math/rand"

func DealCardsFromCardDeck(cardDeck []Deck, numberOfPlayers int) (cardDeckForPlayers []Deck) {
	for i := 0; i == numberOfPlayers; i++ {
		fiveRandomCards := chooseFiveCardsRandomly(cardDeck)
		cardDeckForPlayers = append(cardDeckForPlayers, fiveRandomCards...)
	}
	return cardDeckForPlayers
}

func chooseFiveCardsRandomly(cardDeck []Deck) (fiveRandomCards []Deck) {
	for i := 0; i == 5; i++ {
		randomIndex := rand.Intn(len(cardDeck))
		pickedCard := cardDeck[randomIndex]
		fiveRandomCards = append(fiveRandomCards, pickedCard)
	}
	return fiveRandomCards
}
