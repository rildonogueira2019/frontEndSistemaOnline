import { Processo } from './../processo';
import { Component, OnInit } from '@angular/core';
import { ProcessosService} from '../../processos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-processos-form',
  templateUrl: './processos-form.component.html',
  styleUrls: ['./processos-form.component.css']
})
export class ProcessosFormComponent implements OnInit {

  processo: Processo;
  success: boolean = false;
  errors: String[];
  id: number;


  constructor(
    private service : ProcessosService,
    private router: Router,
    private activeRouter: ActivatedRoute
    ) {
    this.processo = new Processo();
   }

  ngOnInit(): void {
    let params = this.activeRouter.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id']
      if(this.id){
      this.service
      .getProcessoById(this.id)
      .subscribe(
        response => this.processo = response,
        errorResponse => this.processo = new Processo()
      )
    }
    })


    /*if (params && params.value && params.value.id){
      this.id = params.value.id;
      this.service
      .getProcessoById(this.id)
      .subscribe(
        response => this.processo = response,
        errorResponse => this.processo = new Processo()
      )*/
      //console.log(params.value.id);

  }

  voltarParaListagem(){
    this.router.navigate(['/processos/listagem']);
  }

  onSubmit(){
    this.service
    .salvar(this.processo)
    .subscribe( resp => {
        this.success = true;
        this.errors =null;
        this.processo = resp;
        console.log(resp);
      }, errorResponse => {
        this.success= false;
        this.errors = errorResponse.error.errors;
        //console.log(errorResponse.error.errors);
      }
      )
  }
}
