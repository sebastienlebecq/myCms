import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent implements OnInit {
  name : String ='defaut';
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
   console.log("paramètre: "+this.name);
  }


}
