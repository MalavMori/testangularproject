import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class JsondataService {
  constructor(private http:HttpClient) { }
  jsondata = [ 12,34,2,34,34,23,45];
  testvar : string = "Hello"
  getdata(){
    console.log(this.jsondata);
    return this.jsondata
  }
  getjsondata(){
     return this.http.get("http://localhost:3000/sem/sem3")
  }
}
