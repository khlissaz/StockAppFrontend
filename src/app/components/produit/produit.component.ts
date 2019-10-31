import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/app/shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
produits: Produit[];
  constructor(private produitService: ProduitService) { 

  }

  ngOnInit() {
this.produits=this.produitService.getProduits();
  }

}
