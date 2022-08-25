import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByStockNameComponent } from './by-stock-name/by-stock-name.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { StockListV2Component } from './stock-list-v2/stock-list-v2.component';

const routes: Routes = [
  {path: 'stocks', component: StockListV2Component},
  {path: 'create-stock', component: CreateStockComponent},
  {path: '', redirectTo: 'stocks', pathMatch: 'full'},
  {path: 'stocksListByStockTicker/:stockTicker', component: ByStockNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
