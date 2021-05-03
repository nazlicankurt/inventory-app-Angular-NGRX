import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './item-list/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {path: '', component: NavComponent},
 {path: 'item', component: ItemComponent},
 {path: 'item-list', component: ItemListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
