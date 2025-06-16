import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../../core/services/base.http.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService extends BaseHttpService{

  constructor(private http: HttpClient){
    super();
  }

}