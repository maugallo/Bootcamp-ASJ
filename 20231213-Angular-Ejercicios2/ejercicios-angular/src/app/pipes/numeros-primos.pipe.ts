import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numerosPrimos'
})
export class NumerosPrimosPipe implements PipeTransform {

  transform(value: any[], ...args: any): any {

    if (value != null){
      return value.filter((num) => { return this.esPrimo(num) }); //Retorna dentro del filter solo los números que this.esPrimo(num) === true.
    }
  }

  esPrimo(num: number): boolean{
    if (num <= 1){
      return false;
    }
    for (let numero = 2; numero < num; numero++){
      if (num % numero === 0){
        return false;
      }
    }
    return true;
  }
}
