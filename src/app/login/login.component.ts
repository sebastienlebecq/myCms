import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sebastien'
  password = 'mycms'
  authentificationMessage = 'Authnetification invalide'
  bAffichage: boolean = false
  constructor(private router:Router) { }
  ngOnInit() { }

  authentification() {
    if (this.username === 'sebastien' && this.password === 'mycms') {
      this.router.navigate(['bienvenue', this.username])
      this.bAffichage = false
    } else {
      this.bAffichage = true
    }
    console.log("appel à l'authentification de: "+this.username
    + " où bAffichage="+this.bAffichage);
  }
}








/*

  authentificationMessage = 'Authnetification invalide'
 bAffichage : boolean = false

authentification(){
   //console.log("appel à affichage de: "+this.username);
   if (this.username==='sebastien' && this.password==='mycms'){
       this.bAffichage = false
   } else {
     this.bAffichage = true
   }
 }*/