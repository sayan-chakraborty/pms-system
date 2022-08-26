import { SelectorListContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestScheduler } from 'rxjs/testing';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks!: Stock[];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
  };
  
  private getStocks() {
    this.stockService.getStocksList().subscribe(data => {
      this.stocks = data;
    })
  }
}
