import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {gameFieldValues} from "./models/gameFieldValues.type";

@Injectable({
  providedIn: 'root'
})
export class MainGameService {
  private currentGameField: gameFieldValues = new Array(9).fill(0).map(() => new Array(9).fill(null));
  public gameFieldValues = new BehaviorSubject(this.currentGameField);

  constructor() { }
}
