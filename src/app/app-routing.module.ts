import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './pages/item-add/item.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { NavComponent } from './nav/nav.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { DashComponent } from './modules/dash/dash.component';


const routes: Routes = [
  {path: '', component: DashComponent},
 {path: 'item-list', component: ItemComponent},
 {path: 'item', component: ItemListComponent},
 {path: 'item/edit/:id', component: ItemEditComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
