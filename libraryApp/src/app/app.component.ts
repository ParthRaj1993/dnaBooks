import { Component,OnInit } from '@angular/core';
import { HttpCallsService } from "./http-calls.service";
import { Http,Response,Headers } from '@angular/http';
import {PageEvent} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  test : string='test';
   books :any;
   libraryLove : string;
   display : any;
   booksLength : number;

     constructor(private http:HttpCallsService) { }
  ngOnInit(){
   this.http.getBooks().subscribe(data  => {
     
     this.libraryLove= data.text();
     this.books=JSON.parse(this.libraryLove).docs;
  //   console.log('------'+this.books);
  //   console.log( 'COUNT----'+Object.keys(this.books).length); 
     this.display=this.books.slice(0,10);
     this.booksLength=Object.keys(this.books).length;
//      console.log(this.books[0]);
     })


    // console.log('onInit'+this.libraryLove[0].title_suggest);
    
  }
  title = 'app';


  onPaginateChange(x: any){
console.log(x.pageSize+'-------'+x.pageIndex+'----'+x.length);
let pageIndex=x.pageIndex;
let totalLength= x.length;
let currPageSize= x.pageSize;
let startIndex= (pageIndex * currPageSize)+1;
let endIndex= ((pageIndex+1)*currPageSize);
console.log(startIndex+'====='+endIndex);
this.display=this.books.slice(startIndex-1,endIndex);
  }
}
