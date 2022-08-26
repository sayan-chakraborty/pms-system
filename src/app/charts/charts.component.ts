import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  result: any;
  stockPrice: any;
  stockDate: any;
  chart: any = [];
  stockNameForChart = this.stockService.getStockNameForChart();
  timePeriodForChart = this.stockService.getTimePeriodForChart();

  constructor(private stockService: StockService) { 
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    console.log(this.stockNameForChart);
    console.log(this.timePeriodForChart);
    this.stockService.getChart(this.stockNameForChart, this.timePeriodForChart).then((res) => {
      this.result = res;
      console.log(this.result.ticker);
      this.stockPrice = this.result.price_data.map((price_data_multiple: any) => price_data_multiple.value)
      this.stockDate = this.result.price_data.map((price_data_multiple: any) => price_data_multiple.name)
      console.log(this.stockDate, this.stockPrice);
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.stockDate,
          datasets: [{
              label: 'Stock Price for ' + this.result.ticker,
              data: this.stockPrice,
              borderWidth: 5,
              fill: false,
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderColor: '#8e5ea2'
          }]
      }
      
      })
    })
  }

}
