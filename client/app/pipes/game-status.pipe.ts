import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameStatus'
})
export class GameStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const gameStatus = ['', 'In Progress', 'Completed'];
    return gameStatus[value] || '';
  }

}
