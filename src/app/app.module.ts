import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './home/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashComponent } from './home/dash/dash.component';
import { ItemComponent } from './pages/item-add/item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './core/modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ProductService } from './core/services/product.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EffectsModule } from '@ngrx/effects';

import { NotFoundComponent } from './pages/not-found/not-found.component';
@NgModule({
  declarations: [AppComponent, NavComponent, DashComponent, ItemComponent, ItemEditComponent, ItemListComponent, NotFoundComponent],
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
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
