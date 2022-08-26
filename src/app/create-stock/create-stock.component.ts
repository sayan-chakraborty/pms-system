import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { ByStockNameComponent } from '../by-stock-name/by-stock-name.component';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  stock: Stock = new Stock();
  stocks: String[] = [];
  stockForInvestment: Stock[]= [];

  constructor(private stockService: StockService, private router: Router, private bynamecomponent:ByStockNameComponent) { }

  ngOnInit(): void {
  }

  saveStockSell() {

    this.dummy();
    let totalvolume=this.dummy();
    let stockname=this.stock.stockTicker;
    let volume=this.stock.volume;
    
    if(this.stocks.includes(stockname) && volume < totalvolume){
      //this.save();
      console.log("save");
    }

  }

  dummy(){
    this.stock.buyOrSell = "S";
    this.stock.statusCode = 0;

    this.stockService.getStocksList().subscribe(data => {
      this.stocks =data.map((x:any) => x.stockTicker);

    });
    
    console.log(this.stocks);
    
    let stockname=this.stock.stockTicker;

    stockname=stockname.toUpperCase();
    
    let totalvolume=this.totalVolume(stockname);
    console.log(totalvolume);

    return totalvolume;
  }


  saveStockBuy() {
    this.stock.buyOrSell = "B";
    this.stock.statusCode = 0;
    this.save();
  }

  save(){
    this.stockService.createStock(this.stock).subscribe(data => {
      console.log(data);
      this.goToStockList();
    },
    error => console.log(error));
  }

  totalVolume(stockTicker: string){

    console.log(stockTicker);

    this.stockForInvestment=this.bynamecomponent.listStocksByNames(stockTicker);

    var total=0;
    console.log(this.stockForInvestment);
    
    if(this.stockForInvestment){
      this.stockForInvestment.forEach((element, index, array) => {
        if(element.buyOrSell=='S')
          total+=element.volume;
        else total+=element.volume;
      })
    }

    return total;
  }

 getStockListForTotalInvestment (stockTicker: string){

    this.stockService.getStockByStockTicker(stockTicker).subscribe( data => {
      this.stockForInvestment = data;
      console.log(data);
    });
  }

  goToStockList() {
    this.router.navigate(['/stocks']);
  }

  onSubmit() {
    console.log(this.stock);
    //this.saveStock();
  }


}
