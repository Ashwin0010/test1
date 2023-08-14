import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform',
  pure: false
})
export class TransformPipe implements PipeTransform {

  transform(value: string, ...args: any): any {
    console.log(Number(value));
    console.log(args);
    
    
    return new Date(Number(value))

}
}
