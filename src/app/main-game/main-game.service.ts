import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {gameFieldValues} from "./models/gameFieldValues.type";
import {CellPosition} from "./models/cellPosition.interface";
import {ClusterPosition} from "./models/clusterPosition.interface";

@Injectable({
  providedIn: 'root'
})
export class MainGameService {
  private currentGameField: gameFieldValues = new Array(9).fill(0).map(() => new Array(9).fill(2));
  public gameFieldValues = new BehaviorSubject(this.currentGameField);
  public unselectAllCellsSubject = new Subject();
  public currentCellPositionSubject = new Subject<CellPosition>();
  public currentClusterPositionSubject = new Subject<ClusterPosition>();

  constructor() { }

  public unselectAllCells(): void {
    this.unselectAllCellsSubject.next();
  }

  public setActiveCell(cellPosition: CellPosition): void {
    this.currentCellPositionSubject.next(cellPosition);
  }

  public setActiveCluster(clusterPosition: ClusterPosition): void {
    this.currentClusterPositionSubject.next(clusterPosition);
  }
}
