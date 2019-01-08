import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CycleStatisticsService {

  constructor(private http: HttpClient) { }
  
  daysStatistic(type: string = "days") {
    return this.http.get(`/api/dashboard/cycleStatistic?type=${type}`).pipe(
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
