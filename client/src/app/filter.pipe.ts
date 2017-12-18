import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})

export class FilterPipe implements PipeTransform{
  transform(value:any, search:any):any{

    //Check if the search item is null or undefined. 
    if(search == undefined){
      return value;
    }
    return value.filter(function(value){
      return value.name.toLowerCase().includes(search.toLowerCase());
    })
  }
}

