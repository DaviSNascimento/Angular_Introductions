import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppComponent } from '../app.component';
import { CalcularMediaComponent } from '../calcular-media/calcular-media.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { CadastroAlunoComponent } from '../cadastro/cadastro.component';
import { ApoliceSeguroComponent } from '../apolice-seguro/apolice-seguro.component';
@NgModule({
  declarations: [AppComponent,
     CalcularMediaComponent,
      CalculadoraComponent,
       CadastroAlunoComponent,
      ApoliceSeguroComponent
      ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule, 
    AtividadesModuleModule
  ],
  bootstrap: [AppComponent]
})
export class AtividadesModuleModule { }
