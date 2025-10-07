import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game {
  @Input() imageUrl: string = '';
  @Input() price: number =0;
  @Input() name:string ='';
  @Input() checkout:Boolean = false;
  @Input() showImage:Boolean = false;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  sendNotification() {
     
    this.notify.emit(`${this.name},${this.price},${this.checkout},${this.imageUrl},${this.showImage}`);
  }
  
}
