import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {API_URLS} from '../config/api.url.config'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 
  
  constructor(private http:HttpClient) {
   
  }
getProduits():Observable<any>{
  return this.http.get(API_URLS.PRODUITS_URL);

}
addProduit(p): Observable <any>{
  return this.http.post(API_URLS.PRODUITS_URL, p);

}
  
updateProduit(p): Observable <any>{
  return this.http.put(API_URLS.PRODUITS_URL, p)


}
deleteProduit(id): Observable <any>{
 return this.http.delete(API_URLS.PRODUITS_URL + '/${id}');
}
}
