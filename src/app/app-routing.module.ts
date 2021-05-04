import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './pages/item-add/item.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {path: '', component: NavComponent},
 {path: 'item', component: ItemComponent},
 {path: 'item-list', component: ItemListComponent},
 {path: 'item-list/edit/:id', component: ItemComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
