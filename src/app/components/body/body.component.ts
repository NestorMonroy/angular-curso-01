import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {

    mostrar = true;

    frase: any ={
        mensaje: 'Lo que sea',
        autor: 'Otro'
    };

    personajes: string[] =['Spiderman', 'Thor', 'Otro']
}
