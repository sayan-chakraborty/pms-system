import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
  walletMoney = 1000;
  stock: Stock = new Stock();
  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    
  }

  saveStockSell() {
    this.walletMoney = this.walletMoney + (this.stock.price*this.stock.volume);
    console.log(this.walletMoney);
    this.stock.buyOrSell = "Sell";
    this.stock.statusCode = 0;
    this.stockService.createStock(this.stock).subscribe(data => {
      console.log(data);
      this.goToStockList();
    },
    error => console.log(error));
  }

  saveStockBuy() {
    this.walletMoney = this.walletMoney - (this.stock.price*this.stock.volume);
    console.log(this.walletMoney);
    this.stock.buyOrSell = "Buy";
    this.stock.statusCode = 0;
    this.stockService.createStock(this.stock).subscribe(data => {
      console.log(data);
      // this.goToStockList();
    },
    error => console.log(error));
  }

  goToStockList() {
    this.router.navigate(['/stocks']);
  }

  onSubmit() {
    console.log(this.stock);
    //this.saveStock();
  }

}
