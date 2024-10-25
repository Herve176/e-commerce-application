import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  @Output()Itemadded= new EventEmitter<number>();
  value:number=0;
  addnewItem(value:number){
    return  this.Itemadded.emit(value+1);

  }
}
