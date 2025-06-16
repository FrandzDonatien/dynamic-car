import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {catchError, finalize, map, switchMap} from 'rxjs/operators';
import {UserModel} from '../../../models/user.model';
import {Router} from '@angular/router';
import {AuthHTTPService} from "./auth-http.service";
import {JwtModel} from "../../../models/jwt.model";
import {HttpResponseModel} from "../../../models/http-response.model";
import { environment } from '../../../../environments/environment.dev';
import { removeLocalStorageData } from '../../../shared/utils/local-storage.utils';
import { SwalService } from '../../../core/services/swal.service';
import { HttpErrorResponse } from '@angular/common/http';


export type UserType = UserModel | undefined;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  // public fields
  isLoading$: Observable<boolean>;
  currentUser$: Observable<UserType>;
  isLoadingSubject: BehaviorSubject<boolean>;
  currentUserSubject: BehaviorSubject<UserType>;
  // currentUserRole: BehaviorSubject<string[]>;
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  constructor(
    private authHttpService: AuthHTTPService,
    private router: Router,
    private swalService: SwalService
  ) {
    // this.currentUserRole = new BehaviorSubject<string[]>([]);
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserType>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    const subscr = this.getUserByToken().subscribe();
    this.unsubscribe.push(subscr);
  }



  get currentUserValue(): UserType {
    return this.currentUserSubject.value;;
  }


  logout = () =>{
    this.router.navigate(['/auth/login'], {queryParams: {}})
      .then(() => removeLocalStorageData(this.authLocalStorageToken));
  }

  getUserByToken = () : Observable<UserType> =>{
    this.isLoadingSubject.next(true);
    return this.authHttpService.getUserByToken().pipe(
      map((response: HttpResponseModel<UserModel>) => {
        if (response.data) {
          // const roles = response.user.roles.map((r) => r.name);
          // this.currentUserRole.next(roles);
          this.currentUserSubject.next(response.data);
        } else {
          this.logout();
        }
        return response.data;
      }),
      catchError((err) =>{
        console.error('Could not register', err.message);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
      
    );
  }
  
  register(request: Record<string, string>): Observable<any>{
    this.isLoadingSubject.next(true);
    return this.authHttpService.register(request).pipe(
      map((response: HttpResponseModel<UserModel>) =>{
        if(response){
          // this.router.navigate(['/']);
        }
        return response.data
      }),
      catchError((err) =>{
        console.error('Could not register', err.message);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  login(request: Record<string, string>): Observable<UserType> {
    this.isLoadingSubject.next(true);
    return this.authHttpService.login(request).pipe(
      map((response: HttpResponseModel<JwtModel>) => this.setAuthFromLocalStorage(response.data)),
      switchMap(() => this.getUserByToken()),
      catchError((err) => {
        this.swalService.toastError(err.error.message);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  verifyOtp(otp: Record<string, string>) : Observable<UserType> {
    return this.authHttpService.verifyOtp(otp).pipe(
      map((response: HttpResponseModel<UserModel>) => {
        return response.data;
      }),
      catchError((httpErrorResponse: HttpErrorResponse) => {
        this.swalService.toastError(httpErrorResponse.error.message)
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sub) => sub.unsubscribe());
  }

  private setAuthFromLocalStorage(auth:JwtModel): boolean {
    console.log('atk', auth)
    // store auth authToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
    if (auth && auth.accessToken) {
      localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
      return true;
    }
    return false;
  }
}
