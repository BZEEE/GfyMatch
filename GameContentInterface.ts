

export interface IGameContent {
    GetGridSize();
    SetDifficultyLevel(difficultyLevel: number);
    EnterCardDesign(hiddenState: string, revealedState: string);
    GetCardHiddenState(cardIndex: number);
    GetCardRevealedState(cardIndex: number);
}