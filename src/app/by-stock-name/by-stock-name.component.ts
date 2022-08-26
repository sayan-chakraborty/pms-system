import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-by-stock-name',
  templateUrl: './by-stock-name.component.html',
  styleUrls: ['./by-stock-name.component.css']
})
export class ByStockNameComponent implements OnInit {
  stockTicker!: String;
  stocks!: Stock[];

  constructor(private stockService: StockService, private router: Router, private route: ActivatedRoute) { 
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    console.log('Moo');
    //this.stockTicker = this.route.snapshot.params['stockTicker'];
    this.route.paramMap.subscribe((params : ParamMap)=> { 
      console.log("Stock Name is :", typeof params.get('stockTicker'));   
      this.listStocksByNames(params.get('stockTicker'));     
    }); 
    //this.listStocksByNames(this.stockTicker);
  }

  
  listStocksByNames(stockTicker: any) {
    this.stockService.getStockByStockTicker(stockTicker).subscribe(data => {
      this.stocks = data;
      console.log(data);
    });

    return this.stocks;
  }

}
