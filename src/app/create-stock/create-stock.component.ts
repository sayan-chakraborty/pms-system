import { Component, NgZone, OnInit } from '@angular/core';
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
  walletMoney = 1000000;
  stock: Stock = new Stock();
  stocks: String[]=[];
  stockForInvestment: Stock[]=[];
  flag: boolean=false;


  constructor(private stockService: StockService,
              private router: Router,
              private bynamecomponent:ByStockNameComponent,
              private ngZone: NgZone) { }

  ngOnInit(): void {
    
  }

  saveStockSell() {

    this.stock.buyOrSell = "S";
    this.stock.statusCode = 0;

    this.stockService.getStocksList().subscribe(data => {
      this.stocks =data.map((x:any) => x.stockTicker);
      this.update();
    });
    
    this.flag=true;

    this.update()

    
  }

  update(){
    console.log(this.stocks);
    let stockname=this.stock.stockTicker;
    let volume=this.stock.volume;
    stockname=stockname.toUpperCase();
    
    let totalvolume=this.totalVolume(stockname);
    //console.log(totalvolume);
    if(this.flag && this.stocks.includes(stockname) && volume <= totalvolume){
      this.save();
      console.log("save");
    }
    // else{
    //   alert('Order invalid');
    // }
  }


  save(){
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

  totalVolume(stockTicker: string){

    console.log(stockTicker);

    this.stockForInvestment=this.bynamecomponent.listStocksByNames(stockTicker);

    var total=0;
    //console.log(this.stockForInvestment);
    
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
      //console.log(data);
    });
  }

  saveStockBuy() {
    this.walletMoney = this.walletMoney - (this.stock.price*this.stock.volume);
    console.log(this.walletMoney);
    this.stock.buyOrSell = "Buy";
    this.stock.statusCode = 0;
    this.stockService.createStock(this.stock).subscribe(data => {
      console.log(data);
      this.goToStockList();
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
