import { Component, input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {

  label= input('');
  btnClicked=Output('');

  handleButtonClick(){
    console.log("Button clicked")
  }
}
