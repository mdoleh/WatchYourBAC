import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: "quantity-controls",
  styleUrls: ['../styles/widgets/quantitywidget.css'],
  templateUrl: '../views/widgets/Quantity.html'
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
