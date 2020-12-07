package card

// GetCardsForPlayers Gives each player 5 randomly selected cards.
func GetCardsForPlayers(numberOfPlayers int) []Deck {
	cardDeck := CreateNewCardDeck()
	shuffledCardDeck := ShuffleCardDeck(cardDeck)
	cardDeckForPlayers := DealCardsFromCardDeck(shuffledCardDeck, numberOfPlayers)
	return cardDeckForPlayers
}
