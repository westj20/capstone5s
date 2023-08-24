import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-package',
  templateUrl: './price-package.component.html',
  styleUrls: ['./price-package.component.css']
})
export class PricePackageComponent implements OnInit {

  price: Array<any> = [{
    "ID":"1",
    "Plan":"Basic 5S",
    "Price":"$199",
    "PlanOp1":"1 User",
    "PlanOp2":"Admin Online Dash Board",
    "PlanOp3":"Basic Audits",
    "PlanOp4":"Basic Zone Database",
    "PlanOp5":"Online Admin Training",
    "PlanOp6":"Learning Tools",
    "PlanOp7":"Online Store",
  },
  
  { 
    "ID":"2",
    "Plan":"Pro 5S",
    "Price":"$299",
    "PlanOp1":"2 Users",
    "PlanOp2":"Admin Online Dash Board",
    "PlanOp3":"Custom Audits",
    "PlanOp4":"Custom Zone Database",
    "PlanOp5":"Online Admin Training",
    "PlanOp6":"Online Trainie Module",
    "PlanOp7":"Learning Tools",
    "PlanOp8":"Online Store"
  },

  { 
    "ID":"3",
    "Plan":"Power 5S",
    "Price":"$399",
    "PlanOp1":"5 User",
    "PlanOp2":"Unlimited Online Dash Board",
    "PlanOp3":"Custom Audits",
    "PlanOp4":"Custom Zone Database",
    "PlanOp5":"Online Admin Training",
    "PlanOp6":"Learning Tools",
    "PlanOp7":"Learning Tools",
    "PlanOp8":"Learning Tools",
    "PlanOp9":"Online Store",
    "PlanOp10":"Free 5S Package"
  },
  

]

  constructor() { }

  ngOnInit() {
  }

}
