import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'sub2',
    templateUrl: 'sub2.component.html',
    styleUrls: ['sub2.component.css'],
})
export class SubCompComponent2 {
    @Input() min: number = undefined;
    @Input() max: number = undefined;
    @Input() value = 0;
    @Input() valor: number = undefined;
    
    @Output()
    valueOut = new EventEmitter<number>();
    error = false;
    onBlur() {
        this.error = (this.min !== undefined && this.value < this.min)
            || (this.max !== undefined && this.value > this.max);
        if (!this.error) {
            this.valueOut.emit(this.value);
        }
    }

    onNumber(){
        this.valueOut.emit(this.valor);
    }
}
