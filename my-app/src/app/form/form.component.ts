import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent { //two-way-bindib=ng
  nome: string = '';
  sobrenome: string = '';
  endereco: string = '';
  email: string = '';

  buttonClick(event:Event) { //event-binding
    event.preventDefault();
    alert('Os dados foram enviados')
  }
}
