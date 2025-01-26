import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToLink',
  standalone: true
})
export class ConvertToLinkPipe implements PipeTransform {

  transform(value: string | string[]): unknown {
    if (typeof value == 'string') {
      return `<a href=${value} target="_blank">${value}</a>`
    } else {
      return value.reduce((b, a) => {
        return b + `<a href=${a} target="_blank">${a}</a><br />`
      }, '') 
    }
  }

}
