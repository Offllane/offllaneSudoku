import {Component, Input, OnInit} from '@angular/core';
import {CellPosition} from "../../models/cellPosition.interface";

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent implements OnInit {
  @Input() currentValue: number | null = null;
  @Input() cellPosition: CellPosition = {
    rowPosition: 0,
    columnPosition: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
