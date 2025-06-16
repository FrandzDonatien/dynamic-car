import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getResult } from '../../../../shared/utils/main';
import { UserModel } from '../../../../models/user.model';
import { SwalService } from '../../../../core/services/swal.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit, OnDestroy  {

  //variables
  hasError: boolean = false;
  returnUrl: string = "";
  registerForm: FormGroup = new FormGroup({});
  isLoadin$: Observable<boolean> ;

  private unsubscribe: Subscription[] = [];

  //constructor
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private swalService: SwalService
  ){
    this.isLoadin$ =this.authService.isLoading$;
  }


  //methods
  ngOnInit(): void {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] || "verify-otp";
  }


  get f(){
    return this.registerForm.controls;
  }

  initForm(){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit(){
    const data = getResult(this.f);
    const registerSub = this.authService.register(data).pipe(first())
      .subscribe((data: UserModel | undefined) =>{
        if(data){
          this.swalService.toastSuccess("Registration successful").then(() =>{
            this.router.navigate([this.returnUrl]);
          }) 
        }else{
          this.swalService.toastError("Registration failed");
          this.hasError = true;
        }
      })
    this.unsubscribe.push(registerSub);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

}
