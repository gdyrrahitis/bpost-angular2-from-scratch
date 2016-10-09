import { Component, OnInit } from '@angular/core';
import { HomeComponent } from "./app/home.component";

@Component({
    moduleId: module.id,
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    message: string;

    constructor() { }

    ngOnInit() { 
        this.message = "Hello from AppComponent!";
    }

}