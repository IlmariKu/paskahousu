package main

// Card holds the card suits and types in the deck
type Card struct {
	Type string
	Suit string
}

// Deck holds the cards
type Deck []Card

func createNewCardDeck() (deck Deck) {

	types := []string{"Two", "Three", "Four", "Five", "Six", "Seven",
		"Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"}

	suits := []string{"Heart", "Diamond", "Club", "Spade"}

	return deck
}
