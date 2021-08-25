import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MainGameService} from "../main-game.service";
import {gameFieldValues} from "../models/gameFieldValues.type";

@Component({
  selector: 'app-main-game-field',
  templateUrl: './main-game-field.component.html',
  styleUrls: ['./main-game-field.component.scss']
})
export class MainGameFieldComponent implements OnInit, AfterViewInit, OnDestroy {
  private dataSubscription = new Subscription();
  public fieldArray: gameFieldValues = [][0];

  constructor(
    private mainService: MainGameService
  ) { }

  ngOnInit(): void {
    this.dataSubscription.add(this.mainService.gameFieldValues.subscribe((valuesArray: gameFieldValues) => {
      console.table(valuesArray);
      this.fieldArray = valuesArray;
    }))
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
