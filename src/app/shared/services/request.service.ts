import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  // Handle API errors
  handleError(error: HttpErrorResponse): Observable<any> {
    return throwError(() => error);
  }

  get<T>(urlService: string, params?: any, forceMock?: boolean, jsonName?: string): Observable<T> {
    const url = environment.apiUrl + urlService;
    this.headers = new HttpHeaders();

    const service = forceMock ? this.http.get<T>(`assets/mocks/${jsonName}`, { params }) : this.http.get<T>(url, { headers: this.headers, params });

    return service.pipe(catchError(this.handleError));
  }

}
