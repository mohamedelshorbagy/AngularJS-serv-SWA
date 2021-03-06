import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class JsonplaceService {

  constructor(private http:Http) { }


  fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map((res) => 
        res.json()
        );

  }


}
