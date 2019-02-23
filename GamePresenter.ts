import {
    IGameContent,
    GameModel,
    GameController,
    UIFormatter,
    ImageFormatter,
} from "./MasterExports";

export enum DifficultyLevel {
    easy = 4,
    medium = 6,
    hard = 8,
}

export class GamePresenter implements IGameContent {
    private gameModel: GameModel | null;
    private gameController: GameController | null;
    private imageFormatter: ImageFormatter | null;

    public constructor() {
        this.gameModel = new GameModel();
        this.gameController = new GameController();
        this.imageFormatter = new ImageFormatter();
    }

    public GetGridSize() {
        const gridSize = this.gameModel.GetGridSize();
        return gridSize;
    }

    public SetDifficultyLevel(difficultyLevel: number) {
        switch(difficultyLevel) {
            case 1:
                difficultyLevel = DifficultyLevel.easy
                break;
            case 2:
                difficultyLevel = DifficultyLevel.medium
                break;
            case 3:
                difficultyLevel = DifficultyLevel.hard
                break;
            default:
                difficultyLevel = DifficultyLevel.easy
                break;
        }
        this.BuildGrid(difficultyLevel);
    }

    public EnterCardDesign(hiddenState: string, revealedState: string) {
        if (this.gameModel != null) {
            this.gameModel.AddCard(hiddenState, revealedState);
        } else {
            throw Error("GameModel is null");
        }
    }
    
    public GetCardHiddenState(cardIndex: number) {
        if (this.gameModel != null) {
            return this.gameModel.GetCard(cardIndex).GetHiddenState();
        } else {
            throw Error("GameModel is null");
        }
    }

    public GetCardRevealedState(cardIndex: number) {
        if (this.gameModel != null) {
            return this.gameModel.GetCard(cardIndex).GetRevealedState();
        } else {
            throw Error("GameModel is null");
        }
    }

    private BuildGrid(df: number) {
        // add all the cards
        const gridSize = (df ** 2) / 2;
        for (let i = 0; i < gridSize; i++) {
            const hiddenState = this.imageFormatter.GetCardHiddenState();
            const revealedState = this.imageFormatter.GetCardHiddenState();
            this.EnterCardDesign(hiddenState, revealedState);
        }
        // shuffle the cards
        this.gameModel.Shuffle();

    }
}