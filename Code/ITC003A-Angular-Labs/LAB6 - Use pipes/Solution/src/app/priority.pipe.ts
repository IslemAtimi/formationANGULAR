import { Pipe, PipeTransform } from '@angular/core';
import { Priority } from './task';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value: Priority): string {
    switch(value) {
      case Priority.Low: {
        return "low"
      }
      case Priority.Normal: {
        return "normal"
      }
      case Priority.High: {
        return "high"
      }
      default : {
        return "--"
      }
    }
  }

}
