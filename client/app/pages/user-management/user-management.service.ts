import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }
  
  list(skip: number, limit: number = 10) {
    return this.http.get(`/api/dashboard/userList?skip=${skip}&limit=${limit}`).pipe(
      map((res: any) => {
        if (res.code !== 0) {
          return throwError(res && res.message || '获取数据失败');
        }
        res.data.forEach(item => {
          item.dayOfWeek = new Date(item.registeredAt).getDay()
        });
        return res.data;
      }),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }
  
  listDayStatistic() {
    return this.http.get('/api/dashboard/userDayStatistic').pipe(
      map((res: any) => {
        if (res.code !== 0) {
          return throwError(res && res.message || '获取数据失败');
        }
        return res.data;
      }),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }
}
