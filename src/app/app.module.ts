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
import { ProductService } from './core/services/product.service';
import { MaterialModule } from './material.module';
import { DashComponent } from './modules/dash/dash.component';
import { NavComponent } from './nav/nav.component';
import { ItemComponent } from './pages/item-add/item.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { StateStoreModule } from './store/store.module';
@NgModule({
  declarations: [AppComponent, NavComponent, DashComponent, ItemComponent, ItemEditComponent, ItemListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
