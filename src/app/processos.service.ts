import { Processo } from './processos/processo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  constructor( private http: HttpClient) { }

  salvar(processo : Processo) : Observable<Processo> {
    return this.http.post<Processo>('http://localhost:8080/api/testes',processo);
  }

  listarTodos() : Observable<Processo[]> {
    return this.http.get<Processo[]>('http://localhost:8080/api/testes/todos');
  }

  getProcesso() : Processo {
   let processo: Processo = new  Processo();
    processo.nome = 'Fulano de tal';
    return processo;
  }

  getProcessos2(): Processo[] {
    let processos = new Processo();
    processos.id = 12;
    processos.nome = "Carac de Pipi";
    return [processos];
  }

  getProcessoById(id: number) : Observable<Processo>{
    return this.http.get<any>(`http://localhost:8080/api/testes/${id}`);
  }

  deletar(processo: Processo) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/testes/${processo.id}`);
  }
}
