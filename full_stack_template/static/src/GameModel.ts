import { Card } from "./MasterExports";

export class GameModel {
    private tiles: Card[];
    private tileBooleanState: boolean[];

    constructor() {
        this.tiles = [];
        this.tileBooleanState = [];
    }

    public GetGridSize() {
        return this.tiles.length;
    }

    public GetCard(cardIndex: number) {
        return this.tiles[cardIndex];
    }

    public AddCard(hiddenState: string, revealedState: string) {
        // these have to be gif strings
        // push two copies of the card to the grid
        let card = new Card();
        card.SetHiddenState(hiddenState);
        card.SetRevealedState(revealedState);
        card.SetCurrentState(hiddenState);
        this.tiles.push(card);
        this.tiles.push(card);
        this.tileBooleanState.push(false);
        this.tileBooleanState.push(false);
    }

    public SetTileBooleanState(tileIndex: number, state: boolean) {
        this.tileBooleanState[tileIndex] = state;
    }

    public GetTileBooleanState(tileIndex: number) {
        return this.tileBooleanState[tileIndex];
    }

    public Shuffle() {
        for (let i: number = this.tiles.length - 1; i >= 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let itemAtIndex = this.tiles[randomIndex];

            this.tiles[randomIndex] = this.tiles[i];
            this.tiles[i] = itemAtIndex;
        }
    }
}
