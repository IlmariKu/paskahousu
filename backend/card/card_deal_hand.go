package card

// DealCardsFromCardDeck deal a 5 card hand for a determined number of players
func DealCardsFromCardDeck(cardDeck Deck) (dealtCardHands []Deck) {

	for index := range cardDeck {
		if index%5 == 0 && index != 0 {
			singleHand := chunkCardDeck(cardDeck, index)
			dealtCardHands = append(dealtCardHands, singleHand)
		}
	}

	return dealtCardHands
}

func chunkCardDeck(cardDeck Deck, index int) Deck {
	startPoint := index - 5
	singleHand := cardDeck[startPoint:index]

	return singleHand
}
