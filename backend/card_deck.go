package card_deck

// Card holds the card suits and types in the deck
type Card struct {
	cardValue string
	Suit      string
}

// Deck holds the cards
type Deck []Card

func CreateNewCardDeck() (cardDeck Deck) {

	cardValues := []string{"Two", "Three", "Four", "Five", "Six", "Seven",
		"Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"}

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
