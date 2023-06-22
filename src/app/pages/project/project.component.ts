import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
})
export class ProjectComponent implements OnInit {
  constructor(
    private __activated: ActivatedRoute,
    private __api: ApiService,
    private __loader: NgxSpinnerService,
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      {
        name: "description",
        content: "Project page of Nolan Seokane's web portfolio",
      },
      { name: "author", content: "Nolan Seokane" },
      {
        name: "keywords",
        content: "Nolan, Seokane, Angular, Django, Portfolio, Project",
      },
    ]);
    this.setTitle("Project");
  }

  public setTitle(newTitle: string) {
    this.title.setTitle(`${this.title.getTitle()} - ${newTitle}`);
  }

  project: any = null;
  link_elements: any[] = [];
  loader_text: String = "";

  // Execute on load
  async load() {
    const slug: any = this.__activated.snapshot.params;

    await this.__api
      .getOneProjectFromUrl(slug.slug)
      .then(async (res: any) => {
        // Structure Skills
        for (const skill in res.skills) {
          res.skills[skill] = await this.__api
            .getOneSkillFromUrl(res.skills[skill])
            .catch((err: any) => {
              this.__loader.show();
            })
            .finally(() => {
              setTimeout(async () => {
                this.__loader.hide();
              }, 500);
            });
        }

        this.project = await res;

        if (this.project.description.includes("https")) {
          let words = this.project.description.split("\n");
          for (const word in words) {
            if (words[word].includes("https://")) {
              let list_element = document.createElement("li") as HTMLLIElement;
              let anchor_element = document.createElement(
                "a"
              ) as HTMLAnchorElement;
              let word_with_link = words[word].split(": ");

              anchor_element.href = word_with_link[1];
              anchor_element.target = "__blank";
              anchor_element.textContent = word_with_link[0].substring(
                word_with_link[0].indexOf("- ")
              );
              anchor_element.classList.add("other_link");
              anchor_element.style.textDecoration = "none";
              list_element.appendChild(anchor_element);
              this.link_elements.push(list_element);
            }
          }
        }

        this.project.description = this.project.description.substring(
          0,
          this.project.description.indexOf("\nOther GitHub Links:") +
            "\nOther GitHub Links:".length
        );

        let other_links = document.getElementById(
          "other_links"
        ) as HTMLUListElement;
        other_links.style.listStyleType = "none";

        if (this.link_elements.length < 1) {
          other_links.remove();
        }

        for (const ele in this.link_elements) {
          console.log(this.link_elements[ele]);
          other_links.appendChild(this.link_elements[ele]);
        }
      })
      .catch((err: any) => {
        this.loader_text = "No Project Found This Time";
        this.__loader.show();
      })
      .finally(() => {
        setTimeout(async () => {
          this.__loader.hide();
        }, 500);
      });
  }

  ngOnInit(): void {
    this.__loader.show();
    this.load();
  }
}
