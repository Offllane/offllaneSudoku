import {Component, Input, OnInit} from '@angular/core';
import {CellPosition} from "../../models/cellPosition.interface";
import {Subscription} from "rxjs";
import {MainGameService} from "../../main-game.service";

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent implements OnInit {
  private dataSubscription = new Subscription();
  public isCurrentCellActive = false;
  @Input() currentValue: number | null = null;
  @Input() cellPosition: CellPosition = {
    rowPosition: 0,
    columnPosition: 0
  }

  constructor(private mainGameService: MainGameService) { }

  ngOnInit(): void {
    this.dataSubscription.add(this.mainGameService.unselectAllCellsSubject.subscribe(() => {
      this.isCurrentCellActive = false;
    }))
  }

  selectCell(): void {
    this.mainGameService.unselectAllCells();
    this.isCurrentCellActive = true;
    console.log(this.cellPosition);
  }

}
