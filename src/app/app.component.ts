import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro/cadastro.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     CalcularMediaComponent, 
     CalculadoraComponent, 
     CadastroAlunoComponent,
     ApoliceSeguroComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista06';
}
