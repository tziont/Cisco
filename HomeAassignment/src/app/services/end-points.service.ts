import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: HttpClient) { }

  getAllData():Observable<any>{
    return this.http.get('http://localhost:3000/allData').pipe(map(reponse => reponse))
  }
  getEuropeData():Observable<any>{
    return this.http.get('http://localhost:3000/europeData').pipe(map(reponse => reponse))
  }
  getIndiaData():Observable<any>{
    return this.http.get('http://localhost:3000/indiaData').pipe(map(reponse => reponse))
  }
  getNewMexicoData():Observable<any>{
    return this.http.get('http://localhost:3000/newMexicoData').pipe(map(reponse => reponse))
  }
  getUsaData():Observable<any>{
    return this.http.get('http://localhost:3000/usaData').pipe(map(reponse => reponse))
  }
  getGroups():Observable<any>{
    return this.http.get('http://localhost:3000/groups').pipe(map(reponse => reponse))
  }
}
