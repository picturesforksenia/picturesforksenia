import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CardData} from './card-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  cardImages = [
    '008bdc5c-4c59-46d2-94e3-b2f272bbd1e5.JPG',
    '0d9f3682-adb4-451c-a38b-c606433b1687.JPG',
    '28012b7c-e583-47b7-ab3c-7a6eeebf560b.JPG',
    '4830a9ef-4720-45b5-8e0f-92d973ff74f7.JPG',
    '5234dcca-3fd7-4e04-8ac3-5fd58b0822d8.JPG',
    '59b66636-2246-45bb-8f2f-16b34e73b188.JPG',
    '5a42ad89-83dd-4c28-8edd-65967bfa702a.JPG',
    '5ed7788f-a535-4f7a-98c6-6c0824938bdf.JPG',
    '721c823a-8932-4168-aaa3-570a8170f6d0.JPG',
    '7f6bb408-bc2a-4a92-9126-606028cba2e7.JPG',
    '8cdea9ba-d842-4a17-b0e5-2c658f774e95.JPG',
    '9efe89e5-7db3-42e6-abb1-f927c70442ac.JPG',
    'b78f0a15-1cba-47ed-87d6-de314ca4d878.JPG',
    'bfa92cdd-fb0f-4635-9094-287245305a46.JPG',
    'dcf1193a-8ae8-46a6-812f-25a0a337dc97.JPG',
    'ed5b4f00-c506-4dfd-a751-c3fa7154814f.JPG',
    'f3929aea-3594-4924-8955-226fa726ce0d.JPG',
  ]

  private NUMBER_OF_CARDS: Number = 5;

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;

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
    this.cardImages.filter((value, index) => index < this.NUMBER_OF_CARDS).forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({...cardData});
      this.cards.push({...cardData});

    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
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

        if (this.matchedCount === this.NUMBER_OF_CARDS) {
          this.restart();
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }

}
