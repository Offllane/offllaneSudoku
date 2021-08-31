import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CellPosition} from "../../models/cellPosition.interface";
import {Subscription} from "rxjs";
import {MainGameService} from "../../main-game.service";
import {ClusterPosition} from "../../models/clusterPosition.interface";

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent implements OnInit, OnDestroy {
  private dataSubscription = new Subscription();
  public isCurrentCellActive = false;
  private clusterPosition: ClusterPosition = {
    verticalPosition: 'top',
    horizontalPosition: 'left'
  }
  @Input() currentValue: number | null = null;
  @Input() cellPosition: CellPosition = {
    rowPosition: 0,
    columnPosition: 0
  }

  constructor(private mainGameService: MainGameService) { }

  ngOnInit(): void {
    this.defineCurrentClusterPosition();
    this.dataSubscription.add(this.mainGameService.unselectAllCellsSubject.subscribe(() => {
      this.isCurrentCellActive = false;
    }));

    this.dataSubscription.add(this.mainGameService.currentCellPositionSubject.subscribe((cellPosition:CellPosition) => {
      if (this.cellPosition.columnPosition === cellPosition.columnPosition || this.cellPosition.rowPosition === cellPosition.rowPosition) {
        this.isCurrentCellActive = true;
      }
    }));
  }

  selectCell(): void {
    this.mainGameService.unselectAllCells();
    this.isCurrentCellActive = true;
    this.mainGameService.setActiveCell(this.cellPosition);
  }

  defineCurrentClusterPosition(): void {
    const columnPosition = this.cellPosition.columnPosition;
    const rowPosition = this.cellPosition.rowPosition;

    if (rowPosition >= 0 && rowPosition <= 2) {
      this.clusterPosition.verticalPosition = 'top';
    } else if (rowPosition >= 3 && rowPosition <= 5) {
      this.clusterPosition.verticalPosition = 'center';
    } else {
      this.clusterPosition.verticalPosition = 'bottom';
    }

    if (columnPosition >= 0 && columnPosition <= 2) {
      this.clusterPosition.horizontalPosition = 'left';
    } else if (columnPosition >= 3 && columnPosition <= 5) {
      this.clusterPosition.horizontalPosition = 'center';
    } else {
      this.clusterPosition.horizontalPosition = 'right';
    }
  }

  ngOnDestroy(): void {
   this.dataSubscription.unsubscribe();
  }
}
