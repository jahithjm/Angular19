import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  label = input('');
  @Output() btnClicked = new EventEmitter<void>();

  handleButtonClick() {
    this.btnClicked.emit();
  }
}
