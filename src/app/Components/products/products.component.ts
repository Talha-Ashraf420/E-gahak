import { CategoryService } from './../../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$
  categories$;
  constructor(productService:ProductService,CategoryService:CategoryService) {
    this.products$= productService.getAll()
    this.categories$=CategoryService.getCategories()
   }
  ngOnInit(): void {
  }

}
