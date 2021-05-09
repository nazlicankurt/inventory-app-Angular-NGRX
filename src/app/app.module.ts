import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatTableExporterModule } from 'mat-table-exporter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/modules/material.module';
import { ProductService } from './core/services/product.service';
import { NavComponent } from './home/nav/nav.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { StateStoreModule } from './store/store.module';
import {MatTableModule} from '@angular/material/table';
import {ItemComponent}  from './pages/item-add/item.component';
import { DashComponent } from './home/dash/dash.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
@NgModule({
  declarations: [
  AppComponent, NavComponent, ItemEditComponent,ItemListComponent, ItemComponent, DashComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatTableExporterModule,
    FormsModule,
    Ng2SearchPipeModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StateStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
