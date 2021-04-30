import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { AppState } from 'src/app/store';
import { ProductActionTypes } from 'src/app/store/actions/product.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  productForm: FormGroup;
  editMode: boolean = false;
  minDate: Date;
  maxDate: Date;
  displayMessage: { [key: string]: string } = {};

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private store: Store<AppState>
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date();

    this.productForm = this.formBuilder.group({
      stockCode: ['PR', [Validators.required, Validators.minLength(6)]],
      name: [null, [Validators.required, Validators.minLength(2)]],
      createdAt: [null, [Validators.required]],
      lastUpdatedAt: [null, [Validators.required]],
      amount: [null],
      brand: [null, Validators.required],
    });
  }

  ngOnInit(): void {}
  onSubmit(productForm: FormGroup) {
    this.store.dispatch(ProductActionTypes.createProduct(productForm.value));
    if (this.editMode) {
    }
  }
}
