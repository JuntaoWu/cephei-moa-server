import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }
  
  list(skip: number = 0, limit: number = 10) {
    return this.http.get(`/api/dashboard/userList?skip=${skip}&limit=${limit}`).pipe(
      map((res: any) => {
        if (res.code !== 0) {
          return throwError(res && res.message || '获取数据失败');
        }
        res.data.list.forEach(item => {
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

  listWeekStatistic() {
    return this.http.get('/api/dashboard/userWeekStatistic').pipe(
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

  listUserGames() {
    return this.http.get('/api/dashboard/userGames').pipe(
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
  
  listUserMaps(type: string = "province") {
    return this.http.get(`/api/dashboard/userMaps?type=${type}`).pipe(
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

  chinaJson() {
    return this.http.get('assets/map/china.json');
  }

  chinaCitiesJson() {
    return this.http.get('assets/map/china-cities.json');
  }
}
