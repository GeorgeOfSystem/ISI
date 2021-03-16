import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ClothesService {
  url = environment.firebaseConfig.databaseURL;
  clotheType = "";
  
  constructor(private http: HttpClient) { }

  //Getter and Setters
  public getClotheType(): string {
    console.log('getting clothes Services:', this.clotheType);
    return this.clotheType;
  }

  public setClotheType(type:string): void {
    console.log('setting clothes Services to', type);
    this.clotheType = type;
  }

  //Create
  public add(body: any): Observable<any> {
    return this.http.post(`${this.url}/${this.clotheType}.json`, body);
  }
  
  //Read
  public get(): Observable<any> {
    return this.http.get(`${this.url}/${this.clotheType}.json`);
  }
  
  public getById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${this.clotheType}.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`);
  }
    
  //Update

  //Delete
  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${this.clotheType}/${id}.json`);
  }
    
}