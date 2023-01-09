import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { authorData } from '../models/booksLib';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  constructor(private aututhorTableSer:AuthorsService,private route:Router) {}
authorArrs
   onCreate(){
   this.route.navigate(['/adddata'])
   }

  ngOnInit(): void {
 this.authorArrs=this.aututhorTableSer.getAuthor();
 
   console.log(JSON.parse(localStorage.getItem('tableModel')))
    
  }

}
