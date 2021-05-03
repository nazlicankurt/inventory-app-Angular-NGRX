import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { AppState } from 'src/app/store';
import { ProductActionTypes } from 'src/app/store/actions/product.actions';


// validation_messages = {
//   'name': [
//     { type: 'required', message: 'name is required' },
//     { type: 'minlength', message: 'name must be at least 5 characters long' },
//     { type: 'maxlength', message: 'name cannot be more than 25 characters long' },
//     { type: 'pattern', message: 'Your name must contain only numbers and letters' },
//   ],
//   'email': [
//     { type: 'required', message: 'Email is required' },
//     { type: 'pattern', message: 'Enter a valid email' }
//   ],
//   'stockCode': [
//     { type: 'required', message: 'Stockcode is required' },
//     { type: 'minlength', message: 'Stockcode must be at least 5 characters long' },
//   ],
//   }
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
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date();

    this.productForm = this.formBuilder.group({
      stockCode: ['PR-', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      createdAt: ['', [Validators.required]],
      lastUpdatedAt: [null],
      amount: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3)]],
      brand: ['', Validators.required],
    });
  }
//   formAvailableValidator(fg : FormGroup): Validators{
// return fg.get('amount').value == fg.get('')
//   }

  ngOnInit(): void {



  }


  // onSubmit(productForm: FormGroup) {
  //   this.store.dispatch(ProductActionTypes.createProduct(productForm.value));
  //   if (this.editMode) {
  //   }

  onSubmit() {
    if(!this.editMode) {
    this.productService.createProduct(this.productForm.value).subscribe(res => {
      this.router.navigateByUrl('item-list');
      console.log(this.productForm.value)
    })
  }
  else {


  }
}

}
