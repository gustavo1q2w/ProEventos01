import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { EventosComponent } from "./eventos/eventos.component";
import { PalestrantesComponent } from "./palestrantes/palestrantes.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
     imports: [EventosComponent, PalestrantesComponent,HttpClientModule],
    templateUrl: './app.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    styleUrl: './app.component.scss',
    providers:[]
   
})
export class AppComponent {
  title = 'ProEventos-App';
}
