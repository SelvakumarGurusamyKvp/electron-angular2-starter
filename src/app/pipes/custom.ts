import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'keyobject'
})
@Injectable()
export class Keyobject implements PipeTransform {

  public transform(value): any {
      let keys = [];
      for (let key in value) {
          if (value[key]) {
            keys.push(value[key]);
          }
      }
      return keys;
  }
}
