package card

// GetCardsForPlayers Gives each player 5 randomly selected cards.
func GetCardsForPlayers() []Deck {
	cardDeck := CreateNewCardDeck()
	shuffledCardDeck := ShuffleCardDeck(cardDeck)
	cardDeckForPlayers := DealCardsFromCardDeck(shuffledCardDeck)
	return cardDeckForPlayers
}
