import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {gameFieldValues} from "./models/gameFieldValues.type";

@Injectable({
  providedIn: 'root'
})
export class MainGameService {
  private currentGameField: gameFieldValues = new Array(9).fill(0).map(() => new Array(9).fill(2));
  public gameFieldValues = new BehaviorSubject(this.currentGameField);
  public unselectAllCellsSubject = new Subject();

  constructor() { }

  public unselectAllCells(): void {
    this.unselectAllCellsSubject.next();
  }
}
