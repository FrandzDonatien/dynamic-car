import { Injectable } from '@angular/core';
import { ProductHttpService } from './product-http.service';
import { SwalService } from '../../../core/services/swal.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  isLoading$: Observable<boolean>;
  listIsLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  listIsLoadingSubject: BehaviorSubject<boolean>;

  constructor(private httpServvice: ProductHttpService, private swaleService: SwalService) { 
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
    this.listIsLoadingSubject = new BehaviorSubject<boolean>(false);
    this.listIsLoading$ = this.listIsLoadingSubject.asObservable();
  }
}
