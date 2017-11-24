import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpCallsService {
  booksBaseUrl:string='https://openlibrary.org/searchjson?';
  booksDefaultUrl:string='http://openlibrary.org/search.json?title=love';
 imageBaseUrl:string='https://covers.openlibrary.org/b/olid/';

  constructor(private http:Http) { }
getBooks(){
return this.http.get(this.booksDefaultUrl);
}
}
