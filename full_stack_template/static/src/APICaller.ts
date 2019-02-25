

export class APICaller {
    // make call to GFYCAT API get back a response JSON object
    private static gifCategoriesApiURL: string = "https://api.gfycat.com/v1/reactions/populated";
    private static gifApiURL: string = "https://api.gfycat.com/v1/gfycats/search?search_text=";
    private static gifDefaultPictureURL: string = "https://thumbs.gfycat.com/BoilingJauntyBison-max-1mb.gif";
    private static gifCategoriesResponseObject: string[] = [];
    private static gifURLResponseObject: string[];
    private static gif: string;
    private xhttp: XMLHttpRequest = new XMLHttpRequest();

    private static FormatGIFCategoriesList(response: any) {
        APICaller.gifCategoriesResponseObject = response;
    }

    private static FormatGIFResponse(response: any) {
        APICaller.gifURLResponseObject = response;
        return this.gifURLResponseObject["tags"]["gfycats"]["gifUrl"];
    }

    public constructor() {
        // initialize gif categories list
        this.GetGIFCategoriesList();
    }

    public GetGIFCategoriesList() {
        // get gif categories list
        this.xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                APICaller.FormatGIFCategoriesList(this.response);
            }
        }
        this.xhttp.open("GET", APICaller.gifCategoriesApiURL, true);
        this.xhttp.send();
    }

    public GetGIF() {
        // random values between 0 and gifcategories list length - 1
        const randomIndex = Math.floor(Math.random() * APICaller.gifCategoriesResponseObject.length);
        const category = APICaller.gifCategoriesResponseObject[randomIndex];
        this.xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                APICaller.gif = APICaller.FormatGIFResponse(this.response);
            }
        }
        this.xhttp.open("GET", APICaller.gifApiURL + category, true);
        this.xhttp.send();
        return APICaller.gif;
    }

    public GetDefaultPicture() {
        return APICaller.gifDefaultPictureURL;
    }
}