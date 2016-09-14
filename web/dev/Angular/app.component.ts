import { Component } from "@angular/core";

import { Article } from "./Component/Article/Article";

@Component({
    selector: "my-app",
    templateUrl: './dev/Angular/Templates/index.html.twig'
})
export class AppComponent {
    titre = 'Recherche !';
    article: Article = {
        title: '',
        author: '',
        date: Date(),
        tags: []
    };
    articles = [];
    addArticles(newArticle: string) {
        if (newArticle) {
            this.articles.push(newArticle);
        }
    }
}