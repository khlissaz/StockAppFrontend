import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/produit';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];
  produitForm: FormGroup;
  operation: String = "add";
  selectedProduit: Produit;
  constructor(private produitService: ProduitService) {
    this.createForm()
  }

  ngOnInit() {
    this.initProduit()
    this.loadProduits();
    //this.produits=this.produitMockService.getProduits();
  }

  createForm() {
    this.produitForm = new FormGroup({
      ref: new FormControl('', Validators.required),
      quantite: new FormControl('', Validators.required),
      prixUnitaire: new FormControl('', Validators.required)
    });
  }

  loadProduits() {
    this.produitService.getProduits().subscribe(
      data => {
        this.produits = data
        console.log(data)
      },
      error => { console.log('An error was occured') },
      () => { console.log('loading products was done') })
  }


  addProduit() {
    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(
      res => {
        this.initProduit()
        this.loadProduits();
      }
    );
  }
  updateProduit() {
    this.produitService.updateProduit(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }
  initProduit() {
    this.selectedProduit = new Produit();
    this.createForm();
  }
  deleteProduit() {
    this.produitService.deleteProduit(this.selectedProduit.id).
      subscribe(
        res =>{
          this.selectedProduit = new Produit();
          this.loadProduits();
      });
  }

}
