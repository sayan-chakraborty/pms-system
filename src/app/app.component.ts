import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ByStockNameComponent } from './by-stock-name/by-stock-name.component';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stock: Stock = new Stock();
  title = 'Stock Portfolio';
  constructor(private stockService: StockService, private router: Router, public myapp: ByStockNameComponent) { }
  ngOnInit(): void {
  }
  listStocksByStockTicker(stockTicker: String) {
    this.router.navigate(['stocksListByStockTicker', stockTicker]);
  }
  // onSubmit() {
  //   this.router.navigate(['stocksListByStockTicker', this.stock.stockTicker]);
  // }
}
