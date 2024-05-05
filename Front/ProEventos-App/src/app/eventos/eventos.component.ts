import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public eventosFiltrados: any=[];

  larguraImg:number =150;
  margemImg:number =2;
  exibirImg:boolean = true;
  private _filtroLista: string= '';

  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? 
    this.filtrarEventos (this._filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarpor: string): any{
    filtrarpor = filtrarpor.toLocaleLowerCase();
    return this.eventos.filter(
      (      evento: any ) => evento.tema.toLocaleLowerCase().indexOf(filtrarpor) !== -1 ||
                              evento.local.toLocaleLowerCase().indexOf(filtrarpor) !== -1  
    )
  }
  
  constructor (private http: HttpClient){}

  ngOnInit(): void {
    this.getEventos();
  }
alterarImagem(){
  this.exibirImg = !this.exibirImg;
}

  public getEventos(): void{
    this.http.get('https://localhost:7144/api/eventos').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados =this.eventos;
      }, 
      error => console.log(error),
    );
  }
}