import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-socials",
  templateUrl: "./socials.component.html",
})
export class SocialsComponent implements OnInit {
  constructor(public router: Router) {}

  isProjectsPage: boolean = false;

  ngOnInit(): void {
    if (this.router.url === "/projects") {
      this.isProjectsPage = true;
    } else {
      this.isProjectsPage = false;
    }
  }
}
