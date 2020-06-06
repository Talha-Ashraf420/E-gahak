import { ProductService } from '../../../Services/product.service';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 
  categories$: Observable<any[]>
  product:any={};
 id;
  constructor( private router:Router,
    private route:ActivatedRoute,
    private categoryService:CategoryService,
    private productService:ProductService) {
    this.categoryService.getCategories().subscribe(res => this.categories$ = res as any);
    this.id= this.route.snapshot.paramMap.get('id')
    if(this.id) this.productService.getProduct(this.id).subscribe((res:any)=>{
      this.product=res;
      console.log(res)
})
   }
save(product){
  if(this.id) this.productService.UpdateProduct(this.id,product)
  else this.productService.create(product);

  this.router.navigate(['AdminProducts'])
  console.log(product)
}
delete(){
  if (!confirm('Are you sure? You want to delete it?')) return
    this.productService.DeleteProduct(this.id);
    this.router.navigate(['AdminProducts']);
  
}
  ngOnInit(): void {
  }

}
