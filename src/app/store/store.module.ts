import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductEffects } from './effects/product.effects';
import * as fromReducer from './index';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('appState', fromReducer.reducers),
    EffectsModule.forFeature([ProductEffects])
  ],
  exports: [],
  providers: [],
})
export class StateStoreModule { }
