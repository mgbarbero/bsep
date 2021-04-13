import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http: HttpClient) { }

  getHello(): Observable<string> {
    return this.http.get<string>('api/dummy/hello', { responseType: 'text' as 'json' });
  }
}
