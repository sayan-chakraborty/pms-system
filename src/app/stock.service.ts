import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseURL = "http://localhost:8081/getstocks";
  private postURL = "http://localhost:8081/addstocks";
  private byStockTickerURL = "http://localhost:8081/orderDetails";

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type':'application/json'},
      ),
    };
  
    
  getStocksList(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.baseURL}`);
  }
  
  createStock(stock: Stock): Observable<Object>{
    const putstocks="localhost:8081/addstocks";
    stock.stockTicker=stock.stockTicker.toUpperCase();
    var price: number=+stock.price;
    var volume: number=+stock.volume;
    var investment=price * volume;
    stock.totalInvestment=investment;
    console.log(typeof(stock.totalInvestment)+stock.totalInvestment);
    return this.httpClient.post(`${this.postURL}`,stock, this.httpOptions);
  }

  getStockByStockTicker(stockTicker: String): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.byStockTickerURL}/${stockTicker}`);
  }

}
