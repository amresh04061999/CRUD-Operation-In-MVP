import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from 'src/app/contact-manage/contact.model';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {
  transform(items:any[], filterData:string): any {
    if(!items) return [];
    if(!filterData)return items;
    filterData=filterData.toLowerCase();
    return items.filter((items)=>{
         return JSON.stringify(items).toLowerCase().includes(filterData)
    });
  }
}
