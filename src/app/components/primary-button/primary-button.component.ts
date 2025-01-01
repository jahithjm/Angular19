import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {

  label= input('');

  handleButtonClick(){
    console.log('Button clicked:');
  }
}
