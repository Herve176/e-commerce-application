import { Component } from '@angular/core';
import { ArticlesComponent } from "../articles/articles.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ArticlesComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  items: number=0;
  addItem($event: number) {
    this.items=$event;
    console.log(this.items);
    return(this.items);
    }
}
