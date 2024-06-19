import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(role:string[],searchText:string):any {
    if (!role) return []
    if (!searchText) return role
    searchText=searchText.toLowerCase()

    return role.filter((task:string)=>{
      return task.toLowerCase().includes(searchText)
    })
  }

}
