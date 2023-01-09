import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authorData } from 'src/app/models/booksLib';
import { AuthorsService } from 'src/app/services/authors.service';


@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private route:Router, private aututhorTableSer:AuthorsService,private data:FormBuilder) { }
  submit:boolean=false
  dataForm!: FormGroup;
  c:string="";
  authorarrs
  initialForm(){
     this.dataForm=this.data.group(
      {
        firstName:[null,Validators.required],
        lastName:[null,Validators.required],
        book:this.data.array([this.newBook()]),
        birthDate:[null,Validators.required],
        birthPlace:[null,Validators.required],
        description:[null,Validators.required],
      }
     )
  }
get bookType():FormArray{
return this.dataForm.get("book") as FormArray
  }
  newBook(){
    return this.data.group({
      books:['']
    })
  }
 addBook(){
  return this.bookType.push(this.newBook())
 }
 onSubmit() {
  console.log(this.dataForm.value);
}
   onAddBtn(){
    if(this.dataForm.valid){
      this.walkInArr()
      let author={
        firstName: String,
        lastName:String,
        books:String,
        birthDate: String,
        birthPlace:String,
        description:String,
      };
      author.firstName=this.dataForm.get('firstName').value
      author.lastName=this.dataForm.get('lastName').value
      author.books=this.c as unknown as StringConstructor
      author.birthDate=this.dataForm.get('birthDate').value
      author.birthPlace=this.dataForm.get('birthPlace').value
      author.description=this.dataForm.get('description').value
      
      this.authorarrs=this.aututhorTableSer.addAuthor(author)
      this.route.navigate(['/tabledata'])
       this.c=" "
      
    }
    console.log(this.dataForm)
    this.submit=true
   }

   walkInArr(){
    let set=this.dataForm.get('book').value
    for(let index in set){
      if(index=="0"){
        this.c += set[index].books
      }else{
        this.c += ","+ set[index].books
      }
    }
    console.log(this.c);
   }
  ngOnInit(): void { 
    this.initialForm()
  }

}
