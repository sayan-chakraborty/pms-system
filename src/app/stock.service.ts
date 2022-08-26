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
  private chartURL = "https://3p7zu95yg3.execute-api.us-east-1.amazonaws.com/default/priceFeed2?ticker=";
  private stockNameForChart: any;
  private timePeriodForChart: any;
  private chartURLv2: any;

  constructor(private httpClient: HttpClient) {}
  getStocksList(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.baseURL}`);
  }

  createStock(stock: Stock): Observable<Object>{
    stock.stockTicker=stock.stockTicker.toUpperCase();
    var price: number=+stock.price;
    var volume: number=+stock.volume;
    var investment=price * volume;
    stock.totalInvestment=investment;
    console.log(typeof(stock.totalInvestment)+stock.totalInvestment);
    return this.httpClient.post(`${this.postURL}`, stock);
  }

  getStockByStockTicker(stockTicker: String): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.byStockTickerURL}/${stockTicker}`);
  }

  getChart(stockName: any, timePeriod: any) {
    console.log(stockName);
    this.chartURLv2 = this.chartURL + stockName + "&num_days=" + timePeriod.toString();
    console.log(this.chartURLv2);
    return this.httpClient.get(this.chartURLv2).toPromise().then((data) => {
      return data;
    })
  } 

  setStockNameForChart(stockName: any) {
    this.stockNameForChart = stockName;
  }

  setTimePeriodForChart(timePeriod: any) {
    this.timePeriodForChart = timePeriod;
  }

  getStockNameForChart() {
    let temp = this.stockNameForChart;
    this.clearStockNameData();
    return temp;
  }

  getTimePeriodForChart() {
    let temp = this.timePeriodForChart;
    this.clearTimePeriodData();
    return temp;
  }

  clearStockNameData() {
    this.stockNameForChart = undefined;
  }

  clearTimePeriodData() {
    this.timePeriodForChart = undefined;
  }


}
