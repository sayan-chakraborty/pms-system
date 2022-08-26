import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-chart-form',
  templateUrl: './chart-form.component.html',
  styleUrls: ['./chart-form.component.css']
})
export class ChartFormComponent implements OnInit {
  stock: Stock = new Stock();
  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
  }

  sendData() {
    console.log(this.stock.stockTicker);
    this.stockService.setStockNameForChart(this.stock.stockTicker);
    this.stockService.setTimePeriodForChart(this.stock.volume);
    this.router.navigate(['/charts']);
  }

}
