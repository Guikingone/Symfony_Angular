import { Component } from "@angular/core";

import { Article } from "./Component/Article/Article";

@Component({
    selector: "my-app",
    template: `
        <label>Veuillez entrer les informations relatives a l'article : </label>
            <input [(ngModel)]="article.title" placeholder="name">
            <input [(ngModel)]="article.author" placeholder="Auteur" />
            <input [(ngModel)]="article.tags" placeholder="Tags" />
        <br />
        <br />
        <p>Voici votre recherche : <em>{{article.title}}</em> écrit par <strong>{{article.author}}</strong> dans les tags: {{ article.tags }}</p>
        `
})
export class AppComponent {
    titre = 'Recherche !';
    article: Article = {
        title: '',
        author: '',
        date: Date(),
        tags: []
    };
}