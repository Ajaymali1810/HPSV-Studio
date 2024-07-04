import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:4300/forms';

  constructor(private http: HttpClient) {}

  submitForm(formData: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.apiUrl, formData, { observe: 'response' });
  }
}
