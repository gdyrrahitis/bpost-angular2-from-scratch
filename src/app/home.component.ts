import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "home-component",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    message: string;

    ngOnInit() {
        this.message = "... and this is the HomeComponent, hello from here too!";
    }
}