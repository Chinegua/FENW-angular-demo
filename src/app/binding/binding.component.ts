import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html'
})
export class BindingComponent {
    title = 'Angular. Demo';
    getValue(): string {
        return 'valor';
    }
    event(title: string) {
        this.title = title;
    }
}
