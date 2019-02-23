import { Card } from "./MasterExports";


export class GameController {
    

    public CheckMatch(tile1: Card, tile2: Card) {
        const r1 = tile1.GetRevealedState();
        const r2 = tile2.GetRevealedState();
        if (r1 == r2) {
            
        }
    }

    public CheckWin(tiles: boolean[]) {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i] == false) {
                return false;
            }
        }
        return true;
    }

}