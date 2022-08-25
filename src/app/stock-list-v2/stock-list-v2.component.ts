import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-list-v2',
  templateUrl: './stock-list-v2.component.html',
  styleUrls: ['./stock-list-v2.component.css']
})
export class StockListV2Component implements OnInit {

  stocks!: Stock[];
  
  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.getStocks();
  }
  getStocks() {
    this.stockService.getStocksList().subscribe(data => {
      this.stocks = data;
    });
  }

}
