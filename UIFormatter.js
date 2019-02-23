// import GamePresenter from "./GamePresenter";

class UIFormatter {
    constructor() {
        this.mainPage = document.getElementById("mainPage");
        this.gameMenuPage = null;
        this.gameActivityPage = null;
        this.gamePresenter = null;
    }

    LoadGameMenuPage() {
        this.gameMenuPage = document.createElement("div");
        this.gameMenuPage.style.width = "100%";
        this.gameMenuPage.style.height = "100%";
        this.gameMenuPage.style.background = "green";
        // this.gameMenuPage.innerText = "bruh";
        this.mainPage.appendChild(this.gameMenuPage);
        // if (this.gameActivityPage != null) {
        //     this.gameMenuPage.style.width = "100%";
        //     this.gameMenuPage.style.height = "100%";
        //     this.gameMenuPage.style.background = "black";
        //     this.mainPage.appendChild(this.gameMenuPage);
        // } else {
        //     throw Error("GameMenuPage is null");
        // }
    }

    LoadGameActivityPage(difficultyLevel) {
        this.gameActivityPage = document.createElement("div");
        if (this.gameActivityPage != null) {
            this.gameMenuPage.remove();

            this.gameActivityPage.style.width = "100%";
            this.gameActivityPage.style.height = "100%";
            this.gameActivityPage.style.background = "black";
            this.mainPage.appendChild(this.gameActivityPage);
        } else {
            throw Error("GameActivityPage is null");
        }

        this.gamePresenter = new GamePresenter();
        if (this.gamePresenter != null) {
            this.gamePresenter.SetDifficultyLevel(difficultyLevel);
            const gridSize = this.gamePresenter.GetGridSize();
            this.LoadGrid(gridSize);
        } else {
            throw Error("GamePresenter Object is null");
        }
        
    }

    LoadGrid(gridSize) {
        if (this.gameActivityPage != null) {
            const tilesPerSide = Math.sqrt(gridSize);
            for (let i = 0; i < tilesPerSide; i++) {      // height
                for (let j = 0; j < tilesPerSide; j++) {  // width
                    const tile = document.createElement("img");
                    const cardHiddenState = this.gamePresenter.GetCardHiddenState(i);
                    const cardRevealedState = this.gamePresenter.GetCardRevealedState(i);
                    tile.src = cardHiddenState; // some source reference we have to load into the HTML
                    tile.width = window.innerWidth / tilesPerSide;
                    tile.height = window.innerHeight / tilesPerSide;
                    tile.style.top = String(i * tile.height) + "px";
                    tile.style.left = String(j * tile.width) + "px";
                    tile.addEventListener("click", function() {
                        tile.src = cardRevealedState;
                        setTimeout(function() {}, 2000);
                        tile.src = cardHiddenState;
                    })
                }
            }
        } else {
            throw Error("GameActivityPage is null");
        }
    }
}