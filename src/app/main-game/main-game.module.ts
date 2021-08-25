import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGameFieldComponent } from './main-game-field/main-game-field.component';
import { GameCellComponent } from './main-game-field/game-cell/game-cell.component';



@NgModule({
  declarations: [
    MainGameFieldComponent,
    GameCellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainGameFieldComponent,
    GameCellComponent
  ]
})
export class MainGameModule { }
