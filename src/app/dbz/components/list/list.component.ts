import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name:'Trunx',
    power:5000
  }]

  @Output()
  public onDeleteIndex: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string) : void{
    //TODO Emitir el id del personaje
    if(!id) return;
    this.onDeleteIndex.emit(id);
  }
}
