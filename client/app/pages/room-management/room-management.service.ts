import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomManagementService {

  constructor(private http: HttpClient) { }
  
  list(skip: number = 0, limit: number = 10) {
    return this.http.get(`/api/dashboard/roomList?skip=${skip}&limit=${limit}`).pipe(
      map((res: any) => {
        if (res.code !== 0) {
          return throwError(res && res.message || '获取数据失败');
        }
        res.data.list.forEach(item => {
          item.dayOfWeek = new Date(item.createdAt).getDay()
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
    return this.http.get('/api/dashboard/roomDayStatistic').pipe(
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
  
  listWeekStatistic() {
    return this.http.get('/api/dashboard/roomWeekStatistic').pipe(
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

  winRate() {
    return this.http.get('/api/dashboard/roomRate').pipe(
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
