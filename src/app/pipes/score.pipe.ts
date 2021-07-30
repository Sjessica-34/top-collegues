import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoree'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value >= 0) {
      return `+ ${value}`
    }
    return `${value}`
  }
}
