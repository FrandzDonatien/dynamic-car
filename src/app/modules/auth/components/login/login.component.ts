import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first, Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalService } from '../../../../core/services/swal.service';
import { getResult } from '../../../../shared/utils/main';
import { UserModel } from '../../../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  // variables
  hasError: boolean = false;
  returnUrl: string = '';
  loginForm: FormGroup = new FormGroup({});
  isLoadin$: Observable<boolean>;

  private unsubscribe: Subscription[] = [];

  //constructor
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private swalService: SwalService
  ) {
    this.isLoadin$ = this.authService.isLoading$;
  }

  //methode

  ngOnInit(): void {
    this.initForm();
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.hasError = false;
    const data = getResult(this.f);

    const loginSub = this.authService.login(data).pipe(first())
        .subscribe((user: UserModel | undefined) =>{
          if(user){
            this.swalService.toastSuccess('User successfully logged in').then(()=>{
              this.router.navigate([this.returnUrl]);
            });
          }else{
            this.swalService.toastError('Invalid email or password');
            this.hasError = true;
          }
        })
    this.unsubscribe.push(loginSub);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sub) => sub.unsubscribe());
  }
}
