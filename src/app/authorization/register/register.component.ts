import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserM } from 'src/app/models/userM';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  user!: UserM;

  constructor(private fb: FormBuilder,
     private route: Router,
      private authService: ServiceService,
    private toast: ToastrService,
    ){
    this.crearFormulario()
  }


  ngOnInit(): void {
   
  }

  get passNoValido() {
    return this.form.get('password')?.invalid  && this.form.get('password')?.touched 
    || this.form.get('password')?.value != this.form.get('password1')?.value && this.form.get('password')?.touched 
  }
  get emailNoValido() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched
  }
  get nameNoValido() {
    return this.form.get('name')?.invalid && this.form.get('name')?.touched
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      password1: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(4)]],
    });
  }


  guardar() {

    if (this.form.invalid) {

      this.toast.error('Intenta de nuevo', 'Error en los datos!');
      return Object.values(this.form.controls).forEach( control => {
        control.markAllAsTouched();
      })
        

    } else {

      var body = {
        email: this.form.value.email,
        password: this.form.value.password,
        name: this.form.value.name
      }
      // Aquí hago el consumo del api post
     this.authService.saveUser(body)
     .subscribe(response => {
    
      this.toast.success('Redirigiendo...', 'Registro exitoso!')
      setTimeout(() => {
        this.route.navigate(['/login'])
      }, 2000);
      
    })
   
}
  }


}
