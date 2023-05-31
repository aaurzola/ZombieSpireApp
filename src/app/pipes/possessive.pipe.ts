import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'possessive'
})
export class PossessivePipe implements PipeTransform {

  transform(value: string): string {
    return value[value.length - 1] == 's' ? `${value}'`: `${value}'s`;
  }

}
