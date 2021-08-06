import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/posts/';

  postEmployee(data: any) {
    return this.http.post<any>(this.baseUrl, data).pipe(
      map((res:any) => {
        return res;
      })
    );
  }
  getEmployee() {
    return this.http.get<any>(this.baseUrl).pipe(
      map((res:any) => {
        return res;
      })
    );
  }
  updateEmployee(data: any, id: number) {
    return this.http.put<any>(this.baseUrl + id, data).pipe(
      map((res:any) => {
        return res;
      })
    );
  }
  deleteEmployee(id: number) {
    return this.http.delete<any>(this.baseUrl+ id).pipe(
      map((res:any) => {
        return res;
      })
    );
  }
}
