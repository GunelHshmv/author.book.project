import { Injectable } from '@angular/core';
import { authorData } from '../models/booksLib';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
 
  constructor() { 
  } 
  authorArr:Array<authorData>=[
    {
      firstName:"Gunel",
      lastName:'Hashimova',
      books:'Lost Rose',
        birthDate:'6 February 2003',
        birthPlace:"Russian Federation Volgograd",
        description:'Adventure',
    }
   ]
   getAuthor(){
     localStorage.setItem('tableModel',`${JSON.stringify(this.authorArr)}`) //bu metod ne edir???? Senin arrayini geri qaytarir
     return this.authorArr
   }
   getAll(){
    return this.authorArr
   }
   addAuthor(author:any){
   this.authorArr.push(author)
   }
}
