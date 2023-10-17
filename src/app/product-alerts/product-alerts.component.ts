import { Component, Input, Output } from '@angular/core';
import {Product} from '../products';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Output() notify = new EventEmitter();
  @Input() product: Product | undefined;

}
