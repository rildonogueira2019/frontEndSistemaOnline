import { ProcessosService } from './../../processos.service';
import { Processo } from './../processo';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-processos-listagem',
  templateUrl: './processos-listagem.component.html',
  styleUrls: ['./processos-listagem.component.css']
})
export class ProcessosListagemComponent implements OnInit {

  processos: Processo[] = [];
  processoSelecionado: Processo;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ProcessosService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
    .listarTodos()
    .subscribe( resposta => this.processos = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/processos/form'])
  }

  preparaDelecao(processo: Processo){
    this.processoSelecionado = processo;

  }

  deletarProcesso(){
    this.service
    .deletar(this.processoSelecionado)
    .subscribe(
      response => {this.mensagemSucesso = 'Processo deletado com sucesso'
    this.ngOnInit();},
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar'
    )
  }

}
