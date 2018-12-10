export class Card {
  public Suit: string;
  public Rank: string;
  public picture: string;

  constructor(suit: string, rank: string, picture: string) {
    this.Suit = suit;
    this.Rank = rank;
    this.picture = picture;
  }
}
