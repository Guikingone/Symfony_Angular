import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: '<h1>{{ title }} par {{ author }}</h1>'
})
export class AppComponent {
    title = 'Hello World';
    author = 'Guikingone';
}