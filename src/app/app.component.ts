import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CardData} from './card-data.model';
import {RestartDialogComponent} from './restart-dialog/restart-dialog.component';
import {CARD_IMAGES} from "../assets/cardImages";
import {AppData} from "./app-data.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  private data: AppData = {mode: 'Memory Game'};

  cards: CardData[] = [];
  flippedCards: CardData[] = [];
  matchedCount = 0;

  getNumberOfCards(): Number {
    return this.isMemoryGame() ? 5 : 10;
  }

  isMemoryGame(): boolean {
    return 'Memory Game' === this.data.mode;
  }

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.setupCards();
  }

  setupCards(): void {
    this.cards = [];
    if (this.isMemoryGame()) {
      this.setupCardsForMemory()
    } else {
      this.setupCardsForViewer()
    }
  }


  setupCardsForMemory(): void {
    this.shuffleArray(CARD_IMAGES).filter((value, index) => index < this.getNumberOfCards()).forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({...cardData});
      this.cards.push({...cardData});

    });

    this.cards = this.shuffleArray(this.cards);
  }

  setupCardsForViewer(): void {
    this.cards = [];
    this.shuffleArray(CARD_IMAGES).filter((value, index) => index < this.getNumberOfCards()).forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'flipped'
      };
      this.cards.push({...cardData});
    });
  }

  cardClicked(index: number): void {
    if (!this.isMemoryGame()) {
      return
    }

    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();

    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.getNumberOfCards()) {
          this.restart();
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }

  showRestartDialog(): void {
    const dialogRef = this.dialog.open(RestartDialogComponent, {
      disableClose: false
    });
    dialogRef.componentInstance.mode = this.data.mode;
    dialogRef.afterClosed().subscribe((mode) => {
      if(mode) {
        this.data.mode = mode;
        this.restart();
      }
    })
  }
}
