import { Component } from "@angular/core";

@Component({
    selector: "core-introduction",
    templateUrl: './dev/Angular/Templates/index.html.twig'
})
export class AppComponent {
    clickMessage = '';

    onClickButton() {
        this.clickMessage = "Vous venez de cliquer sur le bouton !";
    }
}