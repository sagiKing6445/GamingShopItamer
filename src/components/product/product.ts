
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {Product} from '../../product/product';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,

  selector: 'app-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css']  
}) 
export class ProductComponent {

    
    @Input() 
    public pro: Product = new Product();
    @Output() 
    public notify: EventEmitter<string> = new EventEmitter<string>();
  
    sendNotification() {
       if (this.pro.checkout) {
      this.notify.emit(`${this.pro.name}`);
       }
    }
    
  }


