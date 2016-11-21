import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>This is {{ name }}'s Portfolio Page!</h1>`
})
export class AppComponent {

    name: string;

    constructor(){
        this.name = 'Georg';
    }
 }
