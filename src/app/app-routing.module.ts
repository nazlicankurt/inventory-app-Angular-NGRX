import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './pages/item-add/item.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { DashComponent } from './home/dash/dash.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'item-list', component: ItemComponent },
  { path: 'item', component: ItemListComponent },
  { path: 'item/edit/:id', component: ItemEditComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
