import { LayoutComponent } from './../layout/layout.component';
import { ProcessosListagemComponent } from './processos-listagem/processos-listagem.component';
import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'processos', component: LayoutComponent, children:[
    {path: 'form', component: ProcessosFormComponent },
    {path: 'form/:id', component: ProcessosFormComponent },
    {path: 'listagem', component: ProcessosListagemComponent },
    {path: '', redirectTo: '/processos/listagem', pathMatch: 'full' }
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessosRoutingModule { }
