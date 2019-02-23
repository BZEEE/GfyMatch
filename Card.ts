

export class Card {
    private hiddenState: string | null = null;
    private revealedState: string | null = null;
    private currentState: string | null = null;

    public SetHiddenState(h: string) {
        this.hiddenState = h;
    }

    public GetHiddenState(): string | null {
        return this.hiddenState;
    }

    public SetRevealedState(r: string) {
        this.revealedState = r;
    }

    public GetRevealedState(): string | null {
        return this.revealedState;
    }

    public SetCurrentState(c: string) {
        this.revealedState = c;
    }

    public GetCurrentState(): string | null {
        return this.revealedState;
    }

}
