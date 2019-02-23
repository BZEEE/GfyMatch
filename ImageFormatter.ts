import { 
    APICaller,
    ICardContent,
} from "./MasterExports";

export class ImageFormatter implements ICardContent{
    private apiCaller: APICaller;

    public constructor() {
        this.apiCaller = new APICaller();
    }

    public GetCardHiddenState() {
        const hiddenState = this.apiCaller.GetDefaultPicture();
        return hiddenState;
    }

    public GetCardRevealedState() {
        const gif = this.apiCaller.GetGIF();
        return gif;
    }
}