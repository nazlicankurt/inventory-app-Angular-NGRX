import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  productForm: FormGroup;
   id!:string;
  isAddMode: boolean = false;
  minDate: Date;
  maxDate: Date;
  displayMessage: { [key: string]: string } = {};

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,

  ) {

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date();
    this.productForm = this.formBuilder.group({
      stockCode: ['PR-', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      createdAt: ['', [Validators.required]],
      lastUpdatedAt: [null],
      amount: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3)])],

    });
  }
//   formAvailableValidator(fg : FormGroup): Validators{
// return fg.get('amount').value == fg.get('')
//   }

  ngOnInit(): void {

this.id = this.route.snapshot.params['id'];
this.isAddMode=!this.id;

  }


  // onSubmit(productForm: FormGroup) {
  //   this.store.dispatch(ProductActionTypes.createProduct(productForm.value));
  //   if (this.editMode) {
  //   }

  onSubmit() {

    if(this.productForm.invalid)
    {
      return;
    }
    if(this.isAddMode)
    {
      this.productService.createProduct(this.productForm.value).pipe().subscribe(() => {
        this.router.navigate(['/item-list'], {relativeTo: this.route})
      console.log("kdfkjfjhd", this.productForm.value)
      })
    }
    else{
      this.productService.updateProduct(this.id, this.productForm.value).pipe().subscribe(() =>{
        this.router.navigate(['/edit/id'], {relativeTo:this.route});

      })

    }
}

}
