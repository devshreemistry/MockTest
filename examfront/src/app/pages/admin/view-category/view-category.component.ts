import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  // categories=[{
  //   cid:23,
  //   title:"programming",
  //   description:"java based quiz category"
  // },
  // {
  //   cid:23,
  //   title:"programming",
  //   description:"java based quiz category"
  // },
  // {
  //   cid:23,
  //   title:"programming",
  //   description:"java based quiz category"
  // },];
  
  categories=[{
     cid:"",
      title:"",
   description:""
    }];

  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
this._category.categories().subscribe((data:any )=>{
  this.categories=data;
  console.log(this.categories)
},
(error)=>{
  console.log(error);
  Swal.fire('Error!','Error in loading data','error');
}
);

  }
   //delete quiz
   deleteCategory(cid: any){
    Swal.fire({
icon: 'info',
title:'are you sure',
confirmButtonText:'delete',
showCancelButton:true,
  }).then((result)=>{
    if(result.isConfirmed){

      this._category.deleteCategory(cid).subscribe(
        (data)=>{
        this.categories=this.categories.filter((category) => category.cid !=cid);
        Swal.fire('success','Quiz deleted ','success');
      },
      (error)=>{
        Swal.fire('Error','Error in loading Data','error');
      }
      );
    
    }
  });
    
  }

}
