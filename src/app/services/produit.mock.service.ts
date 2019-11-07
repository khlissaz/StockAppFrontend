import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitMockService {
  private Produits: Produit[]=[];
  constructor() {  let p1:Produit=new Produit(1,"Livre",50,20);
  let p2:Produit=new Produit(2,"Cahier",200,5.25);
  let p3:Produit=new Produit(3,"Stylo",500,2.10);
  this.Produits.push(p1);
  this.Produits.push(p2);
  this.Produits.push(p3);
}
public getProduits():Produit[]{
  return this.Produits;
}
}
