import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchValue:string,searchBy:string="name"): any {
    if(searchBy=="name"){
      
    return value?.filter((el:any)=>el?.name?.toLowerCase()?.includes(searchValue?.toLowerCase()));
    }else if(searchBy=="username"){
      return value?.filter((el:any)=>el?.username?.toLowerCase()?.includes(searchValue?.toLowerCase()));
    }
  }

}
