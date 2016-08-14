import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.Id,
    selector: "home-component",
    templateUrl: "src/app/home.component.html",
    styleUrls: ["src/app/home.component.css"]
})
export class HomeComponent implements OnInit {
    message: string;

    ngOnInit() {
        this.message = "... and this is the HomeComponent, hello from here too!";
    }
}