import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { FormsModule } from '@angular/forms';
import { ProcessosListagemComponent } from './processos-listagem/processos-listagem.component'

@NgModule({
  declarations: [
    ProcessosFormComponent,
    ProcessosListagemComponent
  ],
  imports: [
    CommonModule,
    ProcessosRoutingModule,
    FormsModule
  ], exports:[
    ProcessosFormComponent,
    ProcessosListagemComponent
  ]
})
export class ProcessosModule { }
