import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseURL = "http://stocks-dockermysql-stocks-dockermysql.icgpune2-linux35.conygre.com/getstocks";
  private postURL = "http://stocks-dockermysql-stocks-dockermysql.icgpune2-linux35.conygre.com/addstocks";
  private byStockTickerURL = "http://stocks-dockermysql-stocks-dockermysql.icgpune2-linux35.conygre.com/orderDetails";

  constructor(private httpClient: HttpClient) {}
  getStocksList(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.baseURL}`);
  }

  createStock(stock: Stock): Observable<Object>{
    return this.httpClient.post(`${this.postURL}`, stock);
  }

  getStockByStockTicker(stockTicker: String): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.byStockTickerURL}/${stockTicker}`);
  }

}
