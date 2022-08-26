import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { FormsModule} from '@angular/forms';
import { StockListV2Component } from './stock-list-v2/stock-list-v2.component';
import { ByStockNameComponent } from './by-stock-name/by-stock-name.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartFormComponent } from './chart-form/chart-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStockComponent,
    StockListV2Component,
    ByStockNameComponent,
    ChartsComponent,
    ChartFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ByStockNameComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
