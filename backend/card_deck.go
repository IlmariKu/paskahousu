package card

// Card holds the card suits and types in the deck
type Card struct {
	cardValue int
	Suit      string
}

// Deck holds the cards
type Deck []Card

func CreateNewCardDeck() (cardDeck Deck) {
	cardValues := []int{2, 3, 4, 5, 6, 7,
		8, 9, 10, 11, 12, 13, 16}

	suits := []string{"Heart", "Diamond", "Club", "Spade"}

	for _, cardValue := range cardValues {
		for _, suit := range suits {
			card := Card{
				cardValue: cardValue,
				Suit:      suit,
			}
			cardDeck = append(cardDeck, card)
		}
	}

	return cardDeck
}
