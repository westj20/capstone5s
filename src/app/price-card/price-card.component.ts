import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {

  Price: any = {
    "Plan":"Basic",
    "Price":"$199",
    "PlanOp1":"1 User",
    "PlanOp2":"Online Dash Board",
    "PlanOp3":"Basic Audits",
    "PlanOp4":"Basic Zone Database",
    "PlanOp5":"Online Admin Training",
    "PlanOp6":"Learning Tools"

  }
  constructor() { }

  ngOnInit() {
  }

}
