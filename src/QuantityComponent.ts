import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: "quantity-controls",
  styles: ['input[type="text"] {width: 20px}'],
  template: `
    <div>
		Quantity: <input maxlength="2" [ngModel]="quantityModel" (ngModelChange)="modelUpdated($event)" type="text" /> 
        <input type="button" value="Update" (click)="onUpdate($event)" *ngIf="!shouldHideUpdate"/>
        <input type="button" value="Remove" (click)="onRemove($event)" *ngIf="!shouldHideRemove"/>
    </div>
  `
})
export class QuantityComponent {
    @Output() updateQuantity = new EventEmitter<{}>();
    @Output() removeItem = new EventEmitter<{}>();
	@Output() quantityModelChange = new EventEmitter<{}>();
    @Input() shouldHideUpdate : boolean;
    @Input() shouldHideRemove : boolean;
	@Input() quantityModel;
    
    constructor() {}
    
    onUpdate($event) {
        this.updateQuantity.emit($event);
    }
    
    onRemove($event) {
        this.removeItem.emit($event);
    }
	
	// not sure about this, but at least the parent component can 2-way bind using the [()] syntax
	// no good examples yet
	modelUpdated($event) {
		this.quantityModelChange.emit($event);
	}
}
