import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Thor', 'Hulk', 'Antman'];
  public deletedHero?: string = '';

  deleteLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }
}
