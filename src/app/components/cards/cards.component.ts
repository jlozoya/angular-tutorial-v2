import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() card;
  @Output() miDobleClick: EventEmitter<any> = new EventEmitter();

  lastTime = 0;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.lastTime);
    console.log(new Date().getTime() - this.lastTime < 2000);
    if (new Date().getTime() - this.lastTime < 2000) {
      this.miDobleClick.emit(this.lastTime);
    } else {
      this.lastTime = new Date().getTime();
    }
  }
}
