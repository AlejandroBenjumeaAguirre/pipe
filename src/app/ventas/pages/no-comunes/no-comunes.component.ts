import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre:string = 'Alejandro';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Diana', 'Nathalia', 'Cristina'];
  clientesMapa = {
    '=0': 'No renemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarGenero(){

    if(this.genero === 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Susana';
    }else{
      this.genero = 'masculino';
      this.nombre = 'Alejandro';
    }
  }

  aumentarMapa(){
    this.clientes.push('Alejandro');
  }

  decrementarMapa(){
    this.clientes.pop();
  }

  persona = {
    nombre: 'Aleajdnro',
    edad: 29,
    direccion: 'cali'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ];

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('se resolvio la promesa');
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {

  }

}
