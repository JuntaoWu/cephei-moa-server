import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayOfWeek'
})
export class DayOfWeekPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const dayOfWeekMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return dayOfWeekMap[value] || '';
  }

}
