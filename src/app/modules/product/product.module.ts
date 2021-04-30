import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { ProductReducer } from '../../store/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { productEffects } from '../../store/effects/product.effects';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { StoreModule } from '@ngrx/store';
import { ItemComponent } from './item.component';


@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature('products', ProductReducer),
    EffectsModule.forFeature([productEffects])
  ],
  providers: [ProductService]
})
export class ProductModule { }
