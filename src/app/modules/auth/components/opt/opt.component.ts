import { finalize, first } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalService } from '../../../../core/services/swal.service';
import { getResult } from '../../../../shared/utils/main';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrl: './opt.component.css'
})
export class OptComponent implements OnInit, OnDestroy{

  // variables
  hasError: boolean = false;
  returnUrl: string = "";
  otpForm: FormGroup = new FormGroup({});
  isLoadin$: Observable<boolean> ;

  private unsubscribe: Subscription[] = [];


  // constructor
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private swalService: SwalService
  ){
    this.isLoadin$ = this.authService.isLoading$;
  }



  //methods
  ngOnInit(): void {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] || "/";
  }

  get f(){
    return this.otpForm.controls;
  }

  onSubmit(){
    var data = getResult(this.f);
    console.log('data ', data);
    const otpSub = this.authService.verifyOtp(data).pipe(first())
      .subscribe( (data) =>{
        if(data){
          this.swalService.toastSuccess("Votre code d'activation a été validé avec succès!").then(()=>{
            this.router.navigate([this.returnUrl]);
          })
        }
      })
      this.unsubscribe.push(otpSub);
  }
  initForm(){
    this.otpForm= this.fb.group({
      token: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sub) => sub.unsubscribe());
  }
  

}
