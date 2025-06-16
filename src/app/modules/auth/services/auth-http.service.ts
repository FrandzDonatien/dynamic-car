import { HttpClient } from "@angular/common/http";
import { BaseHttpService } from "../../../core/services/base.http.service";
import { Observable } from "rxjs";
import { UserModel } from "../../../models/user.model";
import { HttpResponseModel } from "../../../models/http-response.model";
import { Injectable } from "@angular/core";
import { JwtModel } from "../../../models/jwt.model";

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService extends BaseHttpService{
  
  //constructor
  constructor(private http: HttpClient){
    super();
  }

  login(request: Record<string, string>): Observable<HttpResponseModel<JwtModel>> {
    return this.http.post<HttpResponseModel<JwtModel>>(`${this.API_USERS_URL}/auth/login`, request, {
      headers: this.httpHeader()
    });
  }

  register(request: Record<string, string>): Observable<HttpResponseModel<UserModel>>{
    return this.http.post<HttpResponseModel<UserModel>>(`${this.API_USERS_URL}/auth/register`, request, {
      headers: this.httpHeader()
    });
  }

  verifyOtp(otp: Record<string, string>): Observable<HttpResponseModel<UserModel>> {
    return this.http.post<HttpResponseModel<UserModel>>(`${this.API_USERS_URL}/auth/verification-token`,otp,{
      headers: this.httpHeader()
    })
  }

  getUserByToken = (): Observable<HttpResponseModel<UserModel>> => {
    return this.http.post<HttpResponseModel<UserModel>>(`${this.API_USERS_URL}/avis-user/me`,{},{
      headers: this.httpHeader()
    })
  }


}