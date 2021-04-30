import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './modules/dash/dash.component';
import { ItemComponent } from './modules/product/item.component';
import { ItemListComponent } from './modules/product/item-list/item-list.component';


const routes: Routes = [
 {path: 'item', component: ItemListComponent},
 {path: 'item-list', component: ItemComponent},

 {path: '', component: DashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
