import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;
  cadastrando: boolean;

  constructor(private router: Router) { }

  onSubmit(){
  console.log(`User: ${this.username}, Pass: ${this.password}`);
  this.router.navigate(['/home']);
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro(){
    this.cadastrando = false;
  }

}
