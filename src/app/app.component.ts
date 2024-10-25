import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from "./articles/articles.component";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesComponent, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'linkedin';
  ArticlesComponent=new ArticlesComponent;
  NavbarComponent= new NavbarComponent;

}
